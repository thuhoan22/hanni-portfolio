import { Link } from "react-router-dom";
import ImgDesc from "assets/img/img-desc.jpg";

export default function MyServices() {
  return (
    <section className="section">
      <div className="inner">
        <div className="section-head">
          <div className="title-box">
            <span className="title-sub">- Services</span>
            <h3 className="title-main">My Services</h3>
          </div>
          <Link to={"mailto:hannin.dev@gmail.com"} className="contact-link">
            hannin.dev@gmail.com
          </Link>
        </div>
        <div className="section-content">
          <ul className="services-list">
            <li className="services-item">
              <span className="num-order">01</span>
              <strong className="text-title">Web Design</strong>
              <p className="text-desc">
                We believe that it is the quality rather than quantity that
                matters. We do it with several years' worth of know-how and
                modern techniques in Usability, Productivity, Quality,
                Performance, and Accessibility.
              </p>
              <Link to={""} className="read-more">
                <span className="icon-arrow before"></span>
                <span className="text">Read More</span>
                <span className="icon-arrow after"></span>
              </Link>
            </li>
            <li className="services-item">
              <span className="num-order">02</span>
              <strong className="text-title">UI/UX Design</strong>
              <p className="text-desc">
                Effective websites that capture your brand, improve your
                conversion rates, and maximize your revenue to help grow your
                business and achieve your goals.
              </p>
              <Link to={""} className="read-more">
                <span className="icon-arrow before"></span>
                <span className="text">Read More</span>
                <span className="icon-arrow after"></span>
              </Link>
            </li>
            <li className="services-item">
              <span className="num-order">03</span>
              <strong className="text-title">Mobile Application</strong>
              <p className="text-desc">
                We provide various development methods and also device
                compatibility
              </p>
              <Link to={""} className="read-more">
                <span className="icon-arrow before"></span>
                <span className="text">Read More</span>
                <span className="icon-arrow after"></span>
              </Link>
            </li>
            <li className="services-item">
              <span className="num-order">04</span>
              <strong className="text-title">User Research</strong>
              <p className="text-desc">
                We're confident we can design a custom website that drives sales
                for your unique business.
              </p>
              <Link to={""} className="read-more">
                <span className="icon-arrow before"></span>
                <span className="text">Read More</span>
                <span className="icon-arrow after"></span>
              </Link>
            </li>
            <li className="services-item">
              <span className="num-order">05</span>
              <strong className="text-title">Animation</strong>
              <p className="text-desc">
                We offer technologies such as CHART, CAROUSEL, LAZY LOADING and
                MOTION optimized for performance and system requirements
              </p>
              <Link to={""} className="read-more">
                <span className="icon-arrow before"></span>
                <span className="text">Read More</span>
                <span className="icon-arrow after"></span>
              </Link>
            </li>
            <li className="services-item">
              <span className="num-order">06</span>
              <strong className="text-title">Game Development</strong>
              <p className="text-desc">
                Focuses on providing attractive User Experience to more users
                than ever by delivering a winning strategy and advanced
                technique to our clients.
              </p>
              <Link to={""} className="read-more">
                <span className="icon-arrow before"></span>
                <span className="text">Read More</span>
                <span className="icon-arrow after"></span>
              </Link>
            </li>
          </ul>
          <div className="image-desc">
            <img src={ImgDesc} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
