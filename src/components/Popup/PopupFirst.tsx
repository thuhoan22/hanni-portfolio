import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ImgCover from "assets/img/img-popup-experience-04.png";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface PopupFirstProps {
  isShow?: boolean;
  onClose: () => void;
}

function PopupFirst({ isShow = false, onClose }: PopupFirstProps) {
  return (
    <Dialog open={isShow} onClose={onClose} TransitionComponent={Transition} className="popup">
      <div className="cover-image"><img src={ImgCover} alt="" /></div>
      <p className="time-working">May 2018 - Sep 2018</p>
      <DialogTitle className="popup-head">
        <span className="company-name">Dekiru</span>
        <strong className="position">Intern Front-end Developer</strong>
      </DialogTitle>
      <DialogContent className="popup-body">
        <strong className="text-key">Main responsibilities:</strong>
        <p className="text">Use HTML, CSS to build the web interface (based on PSD files available).</p>
        <p className="text">Use Javascript(jQuery) to create basic functions for the website.</p>
        <p className="text">Use Bootstrap to create a layout responsive website.</p>
        <p className="text">Get acquainted and implement the project with Vuejs.</p>
        <p className="text">Make a single page with ASP.NET</p>
        <strong className="text-key">Project name:</strong>
        <p className="text">Dekiru Landing page</p>
        <p className="text">Pet at home</p>
      </DialogContent>
      <button onClick={onClose} aria-label="close" className="btn-close">
        <span className="ic"></span>
      </button>
    </Dialog>
  );
}
export default PopupFirst;