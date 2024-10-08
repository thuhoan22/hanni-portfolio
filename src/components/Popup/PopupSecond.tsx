import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ImgCover from "assets/img/img-popup-experience-03.png";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface PopupSecondProps {
  isShow?: boolean;
  onClose: () => void;
}

function PopupSecond({ isShow = false, onClose }: PopupSecondProps) {
  return (
    <Dialog open={isShow} onClose={onClose} TransitionComponent={Transition} className="popup">
      <div className="cover-image"><img src={ImgCover} alt="" /></div>
      <p className="time-working">Dec 2018 - May 2021</p>
      <DialogTitle className="popup-head">
        <span className="company-name">Hivelab Vina</span>
        <strong className="position">Junior Front-end Developer</strong>
      </DialogTitle>
      <DialogContent className="popup-body">
        <strong className="text-key">Main responsibilities:</strong>
        <p className="text">Create website using HTML, CSS(HTML5 / CSS3), Javascript/jQuery (recreating Animation and Motion).</p>
        <p className="text">Create websites that display well on browsers according to customer requirements (IE &gt; 7, Chrome, Safari, Opera, Firefox). Even without using UI Frameworks like Bootstrap etc.</p>
        <p className="text">Create responsive web, mobile web, HTML validate, web SEO... complies with browser interaction and complies with web accessibility.</p>
        <p className="text">Maintenance of old websites.</p>
        <p className="text">Managing work with Gitlab/Github.</p>
        <strong className="text-key">Project name:</strong>
        <p className="text">Hangame Promotion: <a href="https://www.hangame.com/" className="text-link">https://www.hangame.com/</a> (and many other projects).</p>
        <p className="text">Payco Promotion.</p>
        <p className="text">Kakao game.</p>
        <p className="text">Mobile web: Kookmin University.</p>
        <p className="text">LG life.</p>
        <p className="text">
          NHN:
          <a href="http://www.nhnglobal.com/usa/index.nhn" className="text-link">http://www.nhnglobal.com/usa/index.nhn</a>
          <a href="http://www.nhnservice.com/ns/index.nhn" className="text-link">http://www.nhnservice.com/ns/index.nhn</a>
        </p>
        <p className="text">NHN AD, NHN(recruit), and many other projects.</p>
      </DialogContent>
      <button onClick={onClose} aria-label="close" className="btn-close">
        <span className="ic"></span>
      </button>
    </Dialog>
  );
}
export default PopupSecond;