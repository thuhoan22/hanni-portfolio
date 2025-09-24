import { useEffect, useState } from "react";

export interface PaginationProps {
  totalItem: number;
  limit: number;
  currentPage?: number;
  stepPage?: number; // số trang hiển thị trong 1 nhóm
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalItem,
  limit,
  currentPage: propPage = 1,
  stepPage = 10,
  onPageChange,
}: PaginationProps) {
  const totalPage = Math.max(1, Math.ceil(totalItem / limit));
  const [currentPage, setCurrentPage] = useState(propPage);

  // Đồng bộ khi props.currentPage thay đổi từ bên ngoài
  useEffect(() => {
    setCurrentPage(propPage);
  }, [propPage]);

  const handleChangePage = (page: number) => {
    if (page < 1 || page > totalPage) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  // Tính nhóm trang hiện tại
  const currentGroup = Math.floor((currentPage - 1) / stepPage);
  const startPage = currentGroup * stepPage + 1;
  const endPage = Math.min(startPage + stepPage - 1, totalPage);
  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="pagination">
      {totalPage > 1 && (
        <div className="pagination-box">
          <button
            type="button"
            className="pagination-btn pagination-btn-latest"
            onClick={() => handleChangePage(1)}
            disabled={currentPage === 1}
          >
          </button>

          <button
            type="button"
            className="pagination-btn pagination-btn-prev"
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
          </button>

          {visiblePages.map((page) => (
            <button
              key={page}
              type="button"
              className={`pagination-btn ${currentPage === page ? "is-active" : ""}`}
              onClick={() => handleChangePage(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            className="pagination-btn pagination-btn-next"
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPage}
          >
          </button>

          <button
            type="button"
            className="pagination-btn pagination-btn-oldest"
            onClick={() => handleChangePage(totalPage)}
            disabled={currentPage === totalPage}
          >
          </button>
        </div>
      )}
    </div>
  );
}
