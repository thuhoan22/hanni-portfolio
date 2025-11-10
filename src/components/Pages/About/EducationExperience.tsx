import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from 'config';
import Experience from "./Experience";

export default function EducationExperience() {
  const moreInformationQuery = useQuery({
    queryKey: ["dataContact"],
    queryFn: () =>
      fetch(`${BASE_URL}/profile`).then((res) =>
        res.json()
      ),
  });

  return (
    <>
      <section className="section education-experience">
        <div className="inner">
          <div className="education">
            <div className="title-box">
              <span className="title-sub">- Education</span>
            </div>
            <div className="info-box">
              {moreInformationQuery.isSuccess && (
                <>
                  <span className="line"></span>
                  <h3 className="title">{moreInformationQuery.data[0].degree}</h3>
                  <span className="desc">
                  {moreInformationQuery.data[0].education}
                  </span>
                  <span className="desc">Major: {moreInformationQuery.data[0].major}</span>
                </>
              )}
            </div>
          </div>
          <div className="experience">
            <div className="title-box">
              <span className="title-sub">- Experience</span>
              <h3 className="title-main">Everything about me!</h3>
            </div>
            <div className="content-box">
              <Experience />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
