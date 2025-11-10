import { useQuery } from "@tanstack/react-query";
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from 'config';

// export interface PopupProps {
//   titleHead: string;
//   titleSub: string;
//   titleMainContent: string;
//   mainContent: string;
//   titleProjectContent: string;
//   projectcontent: string;
// }


export default function Popup() {
  const { data, isSuccess } = useQuery({
    queryKey: ["dataExperience"],
    queryFn: () =>
      fetch(`${BASE_URL}/experience`).then((res) =>
        res.json()
      ),
  });


  return (
    <Modal
      // {...PopupProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      {/* {isSuccess && data.length > 0 &&
      data.map((item) => {
        return (
          <div key={item.id}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <strong>{item.titleHead}</strong>
                <span>{item.titleSub}</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <strong className="txt-key">{item.titleMainContent}</strong>
              <div>{item.mainContent}</div>
              <strong className="txt-key">{item.titleProjectContent}</strong>
              <div>{item.projectcontent}</div>
            </Modal.Body>
          </div>
        );
      })} */}
    </Modal>
  );
}