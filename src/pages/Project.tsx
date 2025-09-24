import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useDebounce } from "use-debounce";
import CardProject, { CardProps } from "components/CardProject";
import Pagination from "components/Pagination";
import Customer from "components/Customer";

const limit = 9;
export interface SelectType {
  _limit?: number;
  _page?: number;
}

export default function Project() {
  const location = useLocation();
  const navigate = useNavigate();
  const [totalItem, setTotalItem] = useState(0);

  const defaultParams = queryString.parse(location.search.substring(1));

  const [params, setParams] = useState<SelectType>(
    JSON.stringify(defaultParams) !== "{}"
      ? {
          _limit: Number(defaultParams._limit) || limit,
          _page: Number(defaultParams._page) || 1,
        }
      : { _limit: limit, _page: 1 }
  );

  const getData = () => {
    return fetch(
      `http://localhost:5000/card?` + queryString.stringify(params)
    ).then((res) => {
      setTotalItem(Number(res.headers.get("x-total-count") || 0));
      return res.json();
    });
  };
  const [debouncedParams] = useDebounce(params, 300);
  const { data, isSuccess } = useQuery({
    queryKey: ["newData", debouncedParams],
    queryFn: getData,
    placeholderData: keepPreviousData
  });

  useEffect(() => {
    navigate({
      pathname: "/project",
      search: queryString.stringify(params),
    });
  }, [params, navigate]);

  return (
    <div className="main-content project-page">
      <section className="section">
        <div className="inner">
          <div className="section-head">
            <div className="title-box">
              <span className="title-sub">- Projects</span>
              <h3 className="title-main">Recent completed works</h3>
            </div>
          </div>
          <div className="section-content">
            <ul className="project-list">
              {isSuccess && data.length > 0 &&
                data.map((item: CardProps) => {
                  return (
                    <li key={item.id} className="project-item">
                      <CardProject
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        thumb={item.thumb}
                      />
                    </li>
                  );
                })}
            </ul>
            <Pagination
              totalItem={totalItem}
              limit={params._limit ?? limit}
              stepPage={5}
              currentPage={params._page ?? 1}
              onPageChange={(page) =>
                setParams((prev) => ({ ...prev, _page: page }))
              }
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="inner">
          <div className="title-box">
            <span className="title-sub">- Clients</span>
            <h3 className="title-main">Customers & clients</h3>
          </div>
        </div>
        <Customer direction="left" speed={12}>
          <li className="divider-item">Dorfus</li>
          <li className="divider-item">Martino</li>
          <li className="divider-item">Hivelab Vina</li>
          <li className="divider-item">BnD</li>
          <li className="divider-item">Fortna</li>
          <li className="divider-item">Mic</li>
          <li className="divider-item">Paperz</li>
        </Customer>
      </section>
    </div>
  );
}
