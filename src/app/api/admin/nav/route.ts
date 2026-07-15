import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getSessionCookieName,
  verifySessionToken,
} from "@/lib/auth";
import {
  getAdminMenuOptions,
  getProductSubmenuOptions,
} from "@/data/navigation";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;
  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    menus: getAdminMenuOptions(),
    productSubmenus: getProductSubmenuOptions(),
  });
}
