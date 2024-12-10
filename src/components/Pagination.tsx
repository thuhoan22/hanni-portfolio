// import { SelectType } from "pages/Project";
import { useLayoutEffect, useState } from "react";

// interface PaginationProps {
//   totalItem: number;
//   upperPageBound: number;
//   params: SelectType;
//   setParams: React.Dispatch<React.SetStateAction<SelectType>>;
// }

export interface PaginationProps {
  totalItem: number;
  limit: number;
  currentPage?: number;
  stepPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  // const { totalItem, upperPageBound, params, setParams } = props;
  // const [current, setCurrent] = useState<number>(Number(params._page));
  // const totalPages = Math.ceil(totalItem / upperPageBound);
  // const handlePrev = () => {
  //   setCurrent(current - 1);
  // };
  // const handleNext = () => {
  //   setCurrent(current + 1);
  // };

  // const handleSelectPage = (page: number) => {
  //   setCurrent(page);
  // };

  // useEffect(() => {
  //   setCurrent(Number(params._page));
  // }, [params._page]);

  // useEffect(() => {
  //   setParams((prev) => ({ ...prev, _page: current }));
  // }, [current, setParams]);

  // ============================

  const { totalItem, limit, onPageChange, stepPage } = props;
  const [currentPage, setCurrentPage] = useState(props.currentPage ?? 1);
  const [lengthArray, setLengthArray] = useState(0);
  const STEP_PAGE = stepPage ?? 10;

  const totalPage = Math.ceil(totalItem / limit);
  const groupPage = Math.ceil(totalPage / STEP_PAGE);

  const handleChangePage = (page: number) => {
    if (onPageChange) onPageChange(page);
    setCurrentPage(page);
  };

  useLayoutEffect(() => {
    if (Math.floor(totalPage / STEP_PAGE) > 0) {
      if (groupPage > Math.ceil(currentPage / STEP_PAGE) || groupPage === totalPage / STEP_PAGE) {
        setLengthArray(STEP_PAGE);
      } else {
        setLengthArray(totalPage % STEP_PAGE);
      }
    } else {
      setLengthArray(totalPage % STEP_PAGE);
    }
  }, [currentPage, totalPage, groupPage, STEP_PAGE]);

  return (
    <div className="pagination">
      {totalPage > 0 && (
        <div className="pagination-box">
          <button
            type="button"
            className="pagination-btn pagination-btn-latest"
            onClick={() => handleChangePage(1)}
            disabled={currentPage === 1}
          ></button>
          <button
            type="button"
            className="pagination-btn pagination-btn-prev"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          ></button>
          {Array(lengthArray)
            .fill(0)
            .map((_item, index) => {
              const pageNumber = index + 1 + STEP_PAGE * (Math.ceil(currentPage / STEP_PAGE) - 1);
              const className = currentPage === pageNumber ? 'pagination-btn is-active' : 'pagination-btn';
              return (
                <button 
                  type="button" 
                  className={className} 
                  onClick={() => handleChangePage(pageNumber)}
                  key={pageNumber}
                >
                  {pageNumber}
                </button>
              );
            })}
          <button
            type="button"
            className="pagination-btn pagination-btn-next"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPage}
          ></button>
          <button
            type="button"
            className="pagination-btn pagination-btn-oldest"
            onClick={() => handleChangePage(totalPage)}
            disabled={currentPage === totalPage}
          ></button>
        </div>
      )}
    </div>
  );
}
