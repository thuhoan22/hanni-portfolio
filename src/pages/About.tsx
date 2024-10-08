import Overview from "components/Pages/About/Overview";
import EducationExperience from "components/Pages/About/EducationExperience";
import IconDecorContent from "components/IconDecorContent";

export default function About() {
  return (
    <div className="main-content about-page">
      <Overview />
      <EducationExperience />
      <IconDecorContent />
    </div>
  );
}
