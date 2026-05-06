import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useWindowSize } from "hook/useWindowSize";
import { getCollection, ProfileRecord } from "services/localDb";

export default function Overview() {
  const width = useWindowSize();
  
  const overviewQuery = useQuery({
    queryKey: ["dataContact"],
    queryFn: () => Promise.resolve(getCollection<ProfileRecord>("profile").data),

    });

  const dob = "1996/11/10"
  const getAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) 
    {
      age--;
    }
    return age;
  }

  const getExperienceYears = () => {
    const startYear = overviewQuery.data?.[0]?.start;
    if (!startYear) return null;

    const currentYear = new Date().getFullYear();
    return currentYear - parseInt(startYear, 10);
  };

  return (
    <section className="section overview">
      <div className="inner">
        <div className="overview-info">
          {overviewQuery.isSuccess && (
            <>
              <div className="overview-info-left">
                <div className="title-box">
                  <span className="title-sub">- Nice to meet you!</span>
                  <h3 className="title-main">{overviewQuery.data[0].name}</h3>
                </div>
                <span className="text-desc">{overviewQuery.data[0].job}</span>
                <div className="only-pc">
                  <Link to={"/portfolio"} className="btn btn-primary">Got a project?</Link>
                </div>
              </div>
              <div className="overview-info-right">
                <p className="text">
                  Hello there! My name is <em>Hanni Nguyen</em>.<br/> I am a Front-End Developer with a strong passion for building intuitive and engaging user interfaces. I'm dedicated to my work and take pride in creating seamless experiences across both web and mobile platforms.
                </p>
                <p className="text">
                  With ~{getExperienceYears()} years of experience, I have developed a solid foundation in front-end technologies and a deep understanding of user-centered design. I enjoy every stage of the development process, from collaborating with designers and backend teams to implementing responsive, high-quality interfaces that deliver real value.
                </p>
                <div className="info-basic">
                  <table className="table-info">
                    <colgroup>
                      <col style={{ width: "9%" }} />
                      <col style={{ width: "32%" }} />
                      <col style={{ width: "33%" }} />
                      <col style={{ width: "26%" }} />
                    </colgroup>
                    <thead>
                      {width > 768 && (
                        <tr>
                          <th className="type">Age</th>
                          <th className="type">Phone</th>
                          <th className="type">Mail</th>
                          <th className="type">Address</th>
                        </tr>
                      )}
                      {width < 768 && (
                        <tr>
                          <th className="type">Age:</th>
                          <th className="type">Phone:</th>
                          <th className="type">Mail:</th>
                          <th className="type">Address:</th>
                        </tr>
                      )}
                    </thead>
                    <tbody>
                      <tr>
                        <td className="value">{getAge()}</td>
                        <td className="value">
                          <Link to={`tel:${overviewQuery.data[0].phone}`} className="link">
                          {overviewQuery.data[0].phone}
                          </Link>
                        </td>
                        <td className="value">
                          <Link to={`mailto:${overviewQuery.data[0].email}`} className="link">
                          {overviewQuery.data[0].email}
                          </Link>
                        </td>
                        <td className="value">{overviewQuery.data[0].address}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="btn-mo only-mo">
          <Link to={"/portfolio"} className="btn btn-primary btn-got-mo">Got a project?</Link>
        </div>
        <div className="overview-basic">
          <ul className="overview-basic-list">
            <li className="overview-basic-item">
              <span className="shutter"></span>
              <span className="value">5+</span>
              <span className="key">Years of experience</span>
            </li>
            <li className="overview-basic-item">
              <span className="shutter"></span>
              <span className="value">50+</span>
              <span className="key">Project completed</span>
            </li>
            <li className="overview-basic-item">
              <span className="shutter"></span>
              <span className="value">30+</span>
              <span className="key">Happy clients</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
