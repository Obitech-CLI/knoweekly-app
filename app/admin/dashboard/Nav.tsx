import { Plus, Settings } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return (
    <nav>
      <Link href="/admin/create-blogs">
        <Plus size={35} />
        create blogs
      </Link>
      <Link href="/admin/manage-blogs">
        <Settings size={35} />
        manage blogs
      </Link>
    </nav>
  );
}
