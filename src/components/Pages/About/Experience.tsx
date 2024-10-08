
import React, { useState } from "react";
import PopupFirst from "components/Popup/PopupFirst";
import PopupSecond from "components/Popup/PopupSecond";
import PopupThird from "components/Popup/PopupThird";
import PopupFourth from "components/Popup/PopupFourth";

const experiences = [
  {
    id: 1,
    timeWorking: 'May 2018 - Sep 2018',
    companyName: 'Dekiru',
    position: "Intern Front-end Developer",
    content: 'Develop websites as required, use support libraries, make responsive web, and start approaching Vuejs.'
  },
  {
    id: 2,
    timeWorking: 'Dec 2018 - May 2021',
    companyName: 'Hivelab Vina',
    position: "Junior Front-end Developer",
    content: 'Create websites directly and do not use UI Frameworks like Bootstrap etc... and create responsive web, mobile web complies with browser interaction and complies with web accessibility.'
  },
  {
    id: 3,
    timeWorking: 'Jun 2021 - Jul 2022',
    companyName: 'O2 Tech',
    position: "Web Developer",
    content: 'Working with the database, get data from the database to the website and working with CMS admin page. Front end uses Javascript/jQuery/Vuejs/Nuxtjs library.'
  },
  {
    id: 4,
    timeWorking: 'Oct 2022 - Present',
    companyName: 'Hivelab Vina',
    position: "Senior Front-end Developer",
    content: 'Front end uses Javascript/jQuery/Reactjs/Vuejs library (recreating Animation and Motion). Maintenance of old websites and create a website that complies with web accessibility, HTML validate, web SEO.'
  },
]

export default function Experience() {
  const [isModalShow, setModalShow] = useState(false);
  const [isModalIdx, setModalIdx] = useState(0);

  const handleCloseModal = () => {
    setModalShow(false);
  };

  return (
    <>
      <ul className="experience-list">
        {experiences.slice().reverse().map((item, index) => (
          <li className="experience-item" key={index}>
            <button
              className="card-item"
              onClick={() => {
                setModalShow(true)
                setModalIdx(index + 1);
              }}
            >
              <div className="card-top">
                <strong className="text-position">
                  <span className="time">{item.timeWorking}</span>
                  {item.position}
                </strong>
                <span className="text-name">- {item.companyName}</span>
              </div>
              <div className="card-content">
                <p className="text-detail">{item.content}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <PopupFirst isShow={isModalShow && isModalIdx === 4} onClose={handleCloseModal} />
      <PopupSecond isShow={isModalShow  && isModalIdx === 3} onClose={handleCloseModal} />
      <PopupThird isShow={isModalShow  && isModalIdx === 2} onClose={handleCloseModal} />
      <PopupFourth isShow={isModalShow  && isModalIdx === 1} onClose={handleCloseModal} />
    </>
  );
}
