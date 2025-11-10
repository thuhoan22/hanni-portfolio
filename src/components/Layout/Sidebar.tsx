import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useWindowSize } from "hook/useWindowSize";
import { BASE_URL } from 'config';
import IconDecorSidebar from "components/IconDecorSidebar";
import IconFacebook from "assets/img/svg/icon-facebook.svg";
import IconInstagram from "assets/img/svg/icon-instagram.svg";
import IconLinkedin from "assets/img/svg/icon-linkedin.svg";
import IconGithub from "assets/img/svg/icon-github.svg";

export default function SideBar() {
  const width = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const snsQuery = useQuery({
    queryKey: ["dataContact"],
    queryFn: () =>
      fetch(`${BASE_URL}/profile`).then((res) =>
        res.json()
      ),
  });

  const closeMenu = () => setIsOpen(false);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.cssText = "position:fixed;inset:0;overflow-y:scroll";
    } else {
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("inset");
      document.body.style.removeProperty("overflow-y");
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.removeProperty("position");
    document.body.style.removeProperty("inset");
    document.body.style.removeProperty("overflow-y");
  }, [width]);


  return (
    <div className="sidebar">
      {snsQuery.isSuccess && (
        <>
          <div className="author">
            <span className="author-avtar">
              <img src={`${snsQuery.data[0].avt}`} alt="" />
            </span>
            {/* <h1 className="author-name">{snsQuery.data[0].name}</h1> */}
          </div>
          {width > 1024 && (
            <>
              <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to={"/"} className="item-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"} className="item-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/services"} className="item-link">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/portfolio"} className="item-link">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/blog"} className="item-link">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contact"} className="item-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="sidebar-footer">
                <ul className="social">
                  <li className="social-item">
                    <Link to={`${snsQuery.data[0].facebook}`} target="_blank" className="social-link">
                      <img src={IconFacebook} alt="Facebook" />
                    </Link>
                  </li>
                  <li className="social-item">
                    <Link to={`${snsQuery.data[0].instagram}`} target="_blank" className="social-link">
                      <img src={IconInstagram} alt="Instagram" />
                    </Link>
                  </li>
                  <li className="social-item">
                    <Link to={`${snsQuery.data[0].linkedin}`} target="_blank" className="social-link">
                      <img src={IconLinkedin} alt="Linkedin" />
                    </Link>
                  </li>
                  <li className="social-item">
                    <Link to={`${snsQuery.data[0].github}`} target="_blank" className="social-link">
                      <img src={IconGithub} alt="Github" />
                    </Link>
                  </li>
                </ul>
                <p className="copyright">
                  copyright &copy; 2023 Hanni Nguyen. <br />
                  All rights reserved.
                </p>
              </div>
            </>
          )}
          {width <= 1024 && (
            <>
              <button
                type="button"
                className={`btn-menu ${isOpen ? "is-open" : "is-close"}`}
                onClick={handleClickOpenMenu}
              >
                <span className="line-top"></span>
                <span className="line-mid"></span>
                <span className="line-bot"></span>

              </button>
              <div className={`sidebar-mobile ${isOpen ? "is-open" : ""}`}>
                <ul className="nav-list">
                  <li className="nav-item">
                    <NavLink to={"/"} className="item-link" onClick={closeMenu}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about"} className="item-link" onClick={closeMenu}>
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/services"} className="item-link" onClick={closeMenu}>
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/portfolio"} className="item-link" onClick={closeMenu}>
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/blog"} className="item-link" onClick={closeMenu}>
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="item-link" onClick={closeMenu}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <div className="sidebar-footer">
                  <ul className="social">
                    <li className="social-item">
                      <Link to={`${snsQuery.data[0].facebook}`} target="_blank" className="social-link">
                        <img src={IconFacebook} alt="Facebook" />
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link to={`${snsQuery.data[0].instagram}`} target="_blank" className="social-link">
                        <img src={IconInstagram} alt="Instagram" />
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link to={`${snsQuery.data[0].linkedin}`} target="_blank" className="social-link">
                        <img src={IconLinkedin} alt="Linkedin" />
                      </Link>
                    </li>
                    <li className="social-item">
                      <Link to={`${snsQuery.data[0].github}`} target="_blank" className="social-link">
                        <img src={IconGithub} alt="Github" />
                      </Link>
                    </li>
                  </ul>
                  <p className="copyright">
                    copyright &copy; 2023 Hanni Nguyen. <br />
                    All rights reserved.
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      )}
      <IconDecorSidebar />
    </div>
  );
}
