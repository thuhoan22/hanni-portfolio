import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ImgCover from "assets/img/img-popup-experience-01.png";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface PopupFourthProps {
  isShow?: boolean;
  onClose: () => void;
}

function PopupFourth({ isShow = false, onClose }: PopupFourthProps) {
  return (
    <Dialog open={isShow} onClose={onClose} TransitionComponent={Transition} className="popup">
      <div className="cover-image"><img src={ImgCover} alt="" /></div>
      <p className="time-working">Oct 2022 - Present</p>
      <DialogTitle className="popup-head">
        <span className="company-name">Hivelab Vina</span>
        <strong className="position">Senior Front-end Developer</strong>
      </DialogTitle>
      <DialogContent className="popup-body">
        <strong className="text-key">Main responsibilities:</strong>
        <p className="text">Develop scalable and maintainable web applications using HTML5, CSS3, and JavaScript (ES6+), including jQuery and modern frameworks such as React, Next.js, and Vue.js.</p>
        <p className="text">Build pixel-perfect, high-performance user interfaces from design specifications, with a focus on animations and smooth user interactions (like GSAP).</p>
        <p className="text">Build responsive, mobile-friendly websites that ensure compatibility across multiple devices and modern browsers (Chrome, Safari, Firefox, Edge).</p>
        <p className="text">Design landing pages and contribute to UI/UX using Figma, including components, wireframes, and responsive layouts.</p>
        <p className="text">Apply web standards and best practices, including web accessibility, semantic HTML, SEO optimization, and code validation.</p>
        <p className="text">Maintain, refactor, and enhance legacy codebases to improve performance and scalability.</p>
        <p className="text">Work closely with backend systems (Java), integrating APIs and handling data flow efficiently.</p>
        <p className="text">Manage source code using GitLab.</p>
        <strong className="text-key">Project name:</strong>
        <p className="text">Kia/Hyundai</p>
        <p className="text">KARNARK game (MMORPG)</p>
        <p className="text">Amore Pacific</p>
        <p className="text">NC Foundation</p>

        {/* <p className="text">Ignite: <a href="https://cpo.kia.com/" className="text-link">https://cpo.kia.com/</a></p>
        <p className="text">Kia/Hyundai</p>https://cpo.kia.com/
        <p className="text">Kia PBV: <a href="https://www.kia.com/jp/ja/lineup/pv5-passenger" className="text-link">https://www.kia.com/jp/ja/lineup/pv5-passenger</a></p>
        <p className="text">KARNARK game (MMORPG)</p>
        <p className="text">Amore Pacific: <a href="https://www.apgroup.com/int/ko/" className="text-link">https://www.apgroup.com/int/ko/</a></p>
        <p className="text">NC Foundation: <a href="https://www.ncfoundation.or.kr/main" className="text-link">https://www.ncfoundation.or.kr/main</a></p> */}
      </DialogContent>
      <button onClick={onClose} aria-label="close" className="btn-close">
        <span className="ic"></span>
      </button>
    </Dialog>
  );
}
export default PopupFourth;