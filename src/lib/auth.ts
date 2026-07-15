const COOKIE_NAME = "abi_admin_session";
const MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours

function getSecret() {
  return (
    process.env.AUTH_SECRET ||
    process.env.ADMIN_PASSWORD ||
    "abi-dev-auth-secret-change-me"
  );
}

function getCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || "staff",
    password: process.env.ADMIN_PASSWORD || "ABIalloy2669!",
  };
}

function encodePayload(payload: object) {
  return toBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
}

function decodePayload<T>(encoded: string): T | null {
  try {
    return JSON.parse(fromBase64Url(encoded)) as T;
  } catch {
    return null;
  }
}

function toBase64Url(bytes: ArrayBuffer | Uint8Array) {
  const view = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  let binary = "";
  for (let i = 0; i < view.length; i += 1) {
    binary += String.fromCharCode(view[i]);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const binary = atob(padded + pad);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

async function getHmacKey() {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function sign(value: string) {
  const key = await getHmacKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value)
  );
  return toBase64Url(signature);
}

function safeEqual(a: string, b: string) {
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  const len = Math.max(aBytes.length, bBytes.length);
  let mismatch = aBytes.length === bBytes.length ? 0 : 1;
  for (let i = 0; i < len; i += 1) {
    mismatch |= (aBytes[i] || 0) ^ (bBytes[i] || 0);
  }
  return mismatch === 0;
}

export type SessionPayload = {
  sub: string;
  iat: number;
  exp: number;
  nonce: string;
};

export function verifyCredentials(username: string, password: string) {
  const expected = getCredentials();
  return (
    safeEqual(username, expected.username) &&
    safeEqual(password, expected.password)
  );
}

export async function createSessionToken(username: string) {
  const now = Math.floor(Date.now() / 1000);
  const nonceBytes = new Uint8Array(8);
  crypto.getRandomValues(nonceBytes);
  const payload: SessionPayload = {
    sub: username,
    iat: now,
    exp: now + MAX_AGE_SECONDS,
    nonce: toBase64Url(nonceBytes),
  };
  const body = encodePayload(payload);
  const signature = await sign(body);
  return `${body}.${signature}`;
}

export async function verifySessionToken(token: string | undefined | null) {
  if (!token) return null;
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;

  try {
    const expected = await sign(body);
    if (!safeEqual(signature, expected)) return null;
  } catch {
    return null;
  }

  const payload = decodePayload<SessionPayload>(body);
  if (!payload?.sub || !payload.exp) return null;
  if (payload.exp < Math.floor(Date.now() / 1000)) return null;
  return payload;
}

export function getSessionCookieName() {
  return COOKIE_NAME;
}

export function getSessionCookieOptions(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  };
}

export function getClearSessionCookieOptions() {
  return {
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  };
}
