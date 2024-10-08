import RecentProject from "components/Pages/Portfolio/RecentProject";
import CustomerClient from "components/Pages/Portfolio/CustomerClient";
import IconDecorContent from "components/IconDecorContent";

export default function Portfolio() {
  return (
    <div className="main-content portfolio-page">
      <RecentProject limit={20} />
      <CustomerClient />
      <IconDecorContent />
    </div>
  );
}
