import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="wrap">
      <Sidebar />
      <Outlet />
    </div>
  );
}
