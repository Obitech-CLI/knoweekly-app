import { Admin } from "@/app/lib/admin";
import { LogoutButton } from "./Logout";
import { Nav } from "./Nav";
import "./dashboard.css";

export default async function Page() {
  const admin = await Admin();
  return (
    <main className="dashboard">
      <h1>{admin?.role} dashboard</h1>
      <h2>{admin?.username}</h2>
      <Nav />
      <LogoutButton />
    </main>
  );
}
