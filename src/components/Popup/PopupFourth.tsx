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
        <p className="text">Create websites using HTML, CSS(HTML5 / CSS3), Javascript/jQuery/Reactjs/Nextjs/Vuejs (recreating Animation and Motion).</p>
        <p className="text">Create websites that display well on browsers according to customer requirements (IE &gt; 7, Chrome, Safari, Opera, Firefox). Even without using UI Frameworks like Bootstrap etc.</p>
        <p className="text">Create responsive web, mobile web, HTML validate, web SEO... complies with browser interaction and complies with web accessibility.</p>
        <p className="text">Maintenance of old websites.</p>
        <p className="text">Managing work with Gitlab/Github.</p>
        <p className="text">Working with Photoshop, Illustrator, Figma, Zeplin.</p>
        <p className="text">Design web on Figma.</p>
        <strong className="text-key">Project name:</strong>
        <p className="text">Ignite: <a href="https://cpo.kia.com/" className="text-link">https://cpo.kia.com/</a></p>
        <p className="text">Hyundai</p>
        <p className="text">Kia FoD</p>
        <p className="text">Kia PBV: <a href="https://www.kia.com/jp/ja/lineup/pv5-passenger" className="text-link">https://www.kia.com/jp/ja/lineup/pv5-passenger</a></p>
        <p className="text">KARNARK game (MMORPG)</p>
        <p className="text">Amore Pacific: <a href="https://www.apgroup.com/int/ko/" className="text-link">https://www.apgroup.com/int/ko/</a></p>
        <p className="text">NC Foundation: <a href="https://www.ncfoundation.or.kr/main" className="text-link">https://www.ncfoundation.or.kr/main</a></p>
      </DialogContent>
      <button onClick={onClose} aria-label="close" className="btn-close">
        <span className="ic"></span>
      </button>
    </Dialog>
  );
}
export default PopupFourth;