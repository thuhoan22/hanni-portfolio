import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ImgCover from "assets/img/img-popup-experience-02.png";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

interface PopupThirdProps {
  isShow?: boolean;
  onClose: () => void;
}

function PopupThird({ isShow = false, onClose }: PopupThirdProps) {
  return (
    <Dialog open={isShow} onClose={onClose} TransitionComponent={Transition} className="popup">
      <div className="cover-image"><img src={ImgCover} alt="" /></div>
      <p className="time-working">Jun 2021 - Jul 2022</p>
      <DialogTitle className="popup-head">
        <span className="company-name">O2 Tech</span>
        <strong className="position">Web Developer</strong>
      </DialogTitle>
      <DialogContent className="popup-body">
        <strong className="text-key">Main responsibilities:</strong>
        <p className="text">Create website using HTML, CSS(HTML5 / CSS3), Javascript/jQuery/Vuejs/Nuxtjs.</p>
        <p className="text">Create website use Flexbox and UI Frameworks like Bootstrap, Tailwind etc.</p>
        <p className="text">Working with the database, get data from the database to the website.</p>
        <p className="text">Working with CMS admin page.</p>
        <strong className="text-key">Project name:</strong>
        <p className="text"><a href="http://company.o2tech.vn/" className="text-link">O2 Government Platform:</a> O2 Task/ O2 Calendar/ O2 Wiki/ O2 Meet.</p>
        <p className="text"><a href="https://qqlkdxd.aita.gov.vn/" className="text-link">Petroleum management of the Ministry of Industry and Trade.</a></p>
        <p className="text">Electrical Information page of the National monitoring center on E-Government.</p>
        <p className="text">Information security level management.</p>
      </DialogContent>
      <button onClick={onClose} aria-label="close" className="btn-close">
        <span className="ic"></span>
      </button>
    </Dialog>
  );
}
export default PopupThird;