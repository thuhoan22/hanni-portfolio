import IntroText from "components/Pages/Home/IntroText";
import IntroImage from "components/Pages/Home/IntroImage";
import IconDecorContent from "components/IconDecorContent";

export default function Home() {
  return (
    <div className="main-content home-page">
      <div className="inner">
        <div className="intro">
          <IntroText />
          <IntroImage />
        </div>
      </div>
      <IconDecorContent />
    </div>
  );
}
