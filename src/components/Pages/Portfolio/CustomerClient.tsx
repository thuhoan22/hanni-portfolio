import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Customer from "components/Customer";
import Client, { ClientProps } from "components/Client";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function CustomerClient() {
  const { data, isSuccess } = useQuery({
    queryKey: ["dataClient"],
    queryFn: () =>
      fetch(`http://localhost:5000/client`).then((res) =>
        res.json()
      ),
  });

  return (
    <section className="section">
      <div className="section-head">
        <div className="inner">
          <div className="title-box">
            <span className="title-sub">- Clients</span>
            <h3 className="title-main">Customers & clients</h3>
          </div>
        </div>
      </div>
      <div className="section-content">
        <Customer direction="left" speed={12}>
          <li className="divider-item">Dorfus</li>
          <li className="divider-item">Martino</li>
          <li className="divider-item">Hivelab Vina</li>
          <li className="divider-item">BnD</li>
          <li className="divider-item">Fortna</li>
          <li className="divider-item">Mic</li>
          <li className="divider-item">Paperz</li>
        </Customer>
        <div className="client-review">
          <div className="inner">
            <div className="client-review-area">
              <span className="text-sub">- Testimonial</span>
              <strong className="text-title">What client’s say?</strong>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                effect="fade"
                className="swiper-client"
              >
                {isSuccess && data.length > 0 &&
                data.map((item: ClientProps) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <Client
                        id={item.id}
                        review={item.review}
                        avt={item.avt}
                        name={item.name}
                        position={item.position}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
