import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ImgMap from "assets/img/img-map.jpg";

export default function MyContact() {
  const contactQuery = useQuery({
    queryKey: ["dataContact"],
    queryFn: () =>
      fetch(`http://localhost:5000/contact`).then((res) =>
        res.json()
      ),
  });

  return (
    <section className="section">
      <div className="inner">
        <div className="section-head">
          <div className="section-head-left">
            <div className="title-box">
              <span className="title-sub">- Let’s connect</span>
              <h3 className="title-main">Get in touch</h3>
            </div>
            <div className="text-info">
              <p className="text-desc">
                I'm currently avaliable to take on new projects, so feel free to
                send me a message about anything that you want to run past me.
              </p>
              <div className="contact">
                {contactQuery.isSuccess && (
                  <ul className="contact-list">
                    <li className="contact-item">
                      <Link to={`tel:${contactQuery.data[0].phone}`} className="contact-link">
                        <span className="text phone">{contactQuery.data[0].phone}</span>
                      </Link>
                    </li>
                    <li className="contact-item">
                      <Link
                        to={`mailto:${contactQuery.data[0].email}`}
                        className="contact-link"
                      >
                        <span className="text email">{contactQuery.data[0].email}</span>
                      </Link>
                    </li>
                    <li className="contact-item">
                      <Link to={""} className="contact-link">
                        <span className="text address">
                          {contactQuery.data[0].address}
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="section-head-right">
            <input
              type="text"
              id="name"
              className="input-item"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <input
              type="text"
              id="email"
              className="input-item"
              placeholder="Enter your email"
              autoComplete="off"
            />
            <textarea
              className="input-item"
              name="message"
              rows={5}
              placeholder="Wtrite something..."
            />
            <button type="button" className="btn btn-submit btn-primary">
              Submit now
            </button>
          </div>
        </div>
        <div className="section-content">
          <div className="image-desc">
            <img src={ImgMap} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
