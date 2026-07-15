import { Suspense } from "react";
import AdminEditPage from "./EditForm";

export const metadata = {
  title: "Edit Page | ABI Admin",
};

export default function AdminEditRoute() {
  return (
    <Suspense fallback={<p className="text-[#696a6c]">Loading editor…</p>}>
      <AdminEditPage />
    </Suspense>
  );
}
