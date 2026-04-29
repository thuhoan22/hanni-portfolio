import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CardRecord, getById } from "services/localDb";

export default function ProjectDetail() {
  const params = useParams();

  const projectDetailQuery = useQuery({
    queryKey: ["getDetail", params.id],
    queryFn: () => Promise.resolve(getById<CardRecord>("card", Number(params.id))),
  });
  const projectDetail = projectDetailQuery.data;

  return (
    <section className="main-content project-page-detail">
      <div className="section">
        <div className="inner">
          {projectDetailQuery.isSuccess && projectDetail && (
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
                  <h3 className="title-main">{projectDetail.name}</h3>
                  <span className="website-link">
                    Website: 
                    <Link to={`${projectDetail.website}`} target="_blank">
                      {projectDetail.website}
                    </Link>
                  </span>
                </div>
              </div>
              <div className="section-content">
                <div className="img-full">
                  <img src={projectDetail.imgage1} alt="" />
                </div>
                <div className="text-detail text-detail-col">
                  <div className="paragraph">
                    <p className="text">{projectDetail.desc1}</p>
                    <p className="text">{projectDetail.desc2}</p>
                  </div>
                  <div className="info-other">
                    <ul className="info-other-list">
                      <li className="info-other-item">
                        <span className="key">Client</span>
                        <span className="value">{projectDetail.client}</span>
                      </li>
                      <li className="info-other-item">
                        <span className="key">Category</span>
                        <span className="value">{projectDetail.category}</span>
                      </li>
                      <li className="info-other-item">
                        <span className="key">Date</span>
                        <span className="value">{projectDetail.date}</span>
                      </li>
                      <li className="info-other-item">
                        <span className="key">Share</span>
                        <div className="value share-sns">
                          <Link to={""} className="btn-icon btn-facebook"></Link>
                          <Link to={""} className="btn-icon btn-instagram"></Link>
                          <Link to={""} className="btn-icon btn-linkedin"></Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="img-box">
                  <span className="image">
                      <img src={projectDetail.imgage2} alt="" />
                  </span>
                  <div className="img-col img-col-2">
                    <span className="image">
                      <img src={projectDetail.imgage3} alt="" />
                    </span>
                    <span className="image">
                      <img src={projectDetail.imgage4} alt="" />
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
