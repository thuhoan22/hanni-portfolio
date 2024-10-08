import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function IntroText() {
  const informationQuery = useQuery({
    queryKey: ["dataContact"],
    queryFn: () =>
      fetch(`http://localhost:5000/contact`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="intro-text">
      <h2 className="text-title">
        Hi, I’m <span className="text-highlight">Hanni!</span> <br />
        Front End Developer <br />
        based in Hanoi
      </h2>
      <p className="text-desc">
        I have <em className="text-highlight">~6 years</em> of experience in the
        position of Front-End Developer and I'm very passionate and dedicated to
        my work.
      </p>
      <div className="btn-group">
        <Link to={"/portfolio"} className="btn btn-primary">Got a project?</Link>
        <button type="button" className="btn btn-secondary">
          Let’s talk
        </button>
      </div>
      <div className="contact">
      {informationQuery.isSuccess && (
        <ul className="contact-list">
          <li className="contact-item">
            <Link to={`tel:${informationQuery.data[0].phone}`} className="contact-link">
              <span className="text phone">{informationQuery.data[0].phone}</span>
            </Link>
          </li>
          <li className="contact-item">
            <Link to={`mailto:${informationQuery.data[0].email}`} className="contact-link">
              <span className="text email">{informationQuery.data[0].email}</span>
            </Link>
          </li>
          <li className="contact-item">
            <Link to={""} className="contact-link">
              <span className="text address">{informationQuery.data[0].address}</span>
            </Link>
          </li>
        </ul>
      )}
      </div>
    </div>
  );
}
