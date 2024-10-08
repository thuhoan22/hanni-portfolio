import Blog from "./Blog";

export default function BlogAndNews() {
  return (
    <section className="section">
      <div className="inner">
        <div className="section-col">
          <div className="section-head">
            <div className="title-box">
              <span className="title-sub">- Blog</span>
              <h3 className="title-main">My blog & news</h3>
            </div>
            <button type="button" className="btn btn-primary btn-get">
              Get in touch
            </button>
          </div>
          <div className="section-content">
            <Blog />
          </div>
        </div>
      </div>
    </section>
  );
}
