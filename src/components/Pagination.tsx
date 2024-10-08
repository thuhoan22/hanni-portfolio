import { SelectType } from "pages/Project";
import { useEffect, useState } from "react";
import classNames from 'classnames';

interface PaginationProps {
  totalItem: number;
  upperPageBound: number;
  params: SelectType;
  setParams: React.Dispatch<React.SetStateAction<SelectType>>;
}

export default function Pagination(props: PaginationProps) {
  const { totalItem, upperPageBound, params, setParams } = props;
  const [current, setCurrent] = useState<number>(Number(params._page));
  const totalPages = Math.ceil(totalItem / upperPageBound);
  const handlePrev = () => {
    setCurrent(current - 1);
  };
  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handleSelectPage = (page: number) => {
    setCurrent(page);
  };

  useEffect(() => {
    setCurrent(Number(params._page));
  }, [params._page]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, _page: current }));
  }, [current, setParams]);

  return (
    <div className="pagination">
      {totalPages > 0 && current <= totalPages ? (
        <div className="pagination-box">
          <button
            type="button"
            className="pagination-btn pagination-btn-prev"
            onClick={current > 1 ? handlePrev : undefined}
            disabled={current === 1 && true}
          ></button>
          <button type="button" className={classNames("pagination-btn", current === 1 && "is-active")} onClick={() => handleSelectPage(1)}>
            {1}
          </button>
          <button type="button" className={classNames("pagination-btn", current === 2 && "is-active")} onClick={() => handleSelectPage(2)}>
            {2}
          </button>
          <button type="button" className={classNames("pagination-btn", current === 3 && "is-active")} onClick={() => handleSelectPage(3)}>
            {3}
          </button>
          <button
            type="button"
            className="pagination-btn pagination-btn-next"
            onClick={current < totalPages ? handleNext : undefined}
            disabled={current === totalPages && true}
          ></button>
        </div>
      ) : (
        <span className="pagination-text">No Item</span>
      )}
    </div>
  );
}
