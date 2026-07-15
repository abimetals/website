<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Images: No Next.js Optimization (STRICT)

Do NOT use `next/image` or `/_next/image`. Always render original image URLs with a plain HTML `<img>` element. Preserve URLs 100% unmodified. See `.cursor/rules/no-next-image-optimization.mdc`.
<!-- END:nextjs-agent-rules -->
