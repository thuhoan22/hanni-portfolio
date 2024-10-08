import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function ProjectDetail() {
  const params = useParams();

  const projectDetailQuery = useQuery({
    queryKey: ["getDetail", params.id],
    queryFn: () =>
      fetch(`http://localhost:5000/card/${params.id}`).then((res) =>
        res.json()
      ),
  });

  return (
    <section className="main-content project-page-detail">
      <div className="section">
        <div className="inner">
          {projectDetailQuery.isSuccess && (
            <>
              <div className="section-head">
                <div className="title-box">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item prev-page">
                      <Link to={"/project"} className="link">
                        <span className="text">Projects</span>
                      </Link>
                    </li>
                    <li className="breadcrumb-item current-page">
                      <span>Project detail</span>
                    </li>
                  </ul>
                  <h3 className="title-main">{projectDetailQuery.data.name}</h3>
                  <span className="website-link">
                    Website: 
                    <Link to={`${projectDetailQuery.data.website}`} target="_blank">
                      {projectDetailQuery.data.website}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="section-content">
                <div className="img-full">
                  <img src={projectDetailQuery.data.imgage1} alt="" />
                </div>
                <div className="text-detail text-detail-col">
                  <div className="paragraph">
                    <p className="text">{projectDetailQuery.data.desc1}</p>
                    <p className="text">{projectDetailQuery.data.desc2}</p>
                  </div>
                  <div className="info-other">
                    <dl>
                      <dt>Client</dt>
                      <dd>{projectDetailQuery.data.client}</dd>
                      <dt>Category</dt>
                      <dd>{projectDetailQuery.data.category}</dd>
                      <dt>Date</dt>
                      <dd>{projectDetailQuery.data.date}</dd>
                      <dt>Share</dt>
                      <dd className="share-sns">
                        <Link to={""} className="btn-icon btn-facebook"></Link>
                        <Link to={""} className="btn-icon btn-instagram"></Link>
                        <Link to={""} className="btn-icon btn-linkedin"></Link>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="img-box">
                  <span className="image">
                    <img src={projectDetailQuery.data.imgage2} alt="" />
                  </span>
                  <div className="img-col img-col-2">
                    <span className="image">
                      <img src={projectDetailQuery.data.imgage3} alt="" />
                    </span>
                    <span className="image">
                      <img src={projectDetailQuery.data.imgage4} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
