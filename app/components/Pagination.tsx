import { CaretRight } from "@phosphor-icons/react";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav className="flex justify-center mt-4 text-xs">
      <ul className="inline-flex items-center space-x-2">
        {showPrevNext && (
          <li>
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-1 hover:text-gray-700 disabled:text-gray-200 disabled:cursor-not-allowed"
            >
              <CaretLeft size={20} /> <span>Prev</span>
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => handlePageClick(number)}
              className={`rounded-md px-2 py-1 leading-tight border ${
                currentPage === number
                  ? "text-black bg-slate-200"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        {showPrevNext && (
          <li>
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1 hover:text-gray-700 disabled:text-gray-200 disabled:cursor-not-allowed"
            >
              <span>Next</span> <CaretRight size={20} />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
