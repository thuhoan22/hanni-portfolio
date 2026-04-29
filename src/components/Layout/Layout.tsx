import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="wrap">
      <ScrollToTop />
      <Sidebar />
      <Outlet />
    </div>
  );
}
