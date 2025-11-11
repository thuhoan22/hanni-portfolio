import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BASE_URL } from 'config';
import CardProject, { CardProps } from "components/CardProject";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

interface RecentProjectProps {
  limit: number;
}

export default function RecentProject({ limit }: RecentProjectProps) {
  const { data, isSuccess } = useQuery({
    queryKey: ["newData"],
    queryFn: () =>
      fetch(`${BASE_URL}/card?_limit=${limit}`).then((res) =>
        res.json()
      ),
  });

  return (
    <section className="section project">
      <div className="inner">
        <div className="section-head">
          <div className="title-box">
            <span className="title-sub">- Projects</span>
            <h3 className="title-main">Recent completed works</h3>
          </div>
        </div>
        <div className="section-content">
          <div className="slider">
            <Swiper
              className="swiper-project"
              navigation={true}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              effect="fade"
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
            >
              {isSuccess && data.length > 0 &&
                data.map((item: CardProps) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <CardProject
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        thumb={item.thumb}
                      />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
          </div>
          <div className="btn-area">
            <Link to={"/project"} className="btn btn-primary btn-viewmore">
              View all project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
