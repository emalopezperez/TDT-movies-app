import "./pagination.scss";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

interface Props {
  totalPages: number;
  page: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  totalPages,
  page,
  handlePageChange,
}) => {
  return (
    <div className="pagination mb-4">
      <nav className="flex max-w-[1366px] w-full items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-white">
              <ArrowLongLeftIcon
                className="mr-3 h-5 w-5 text-white"
                aria-hidden="true"
              />
              Anterior
            </button>
          )}
        </div>
        <div className="hidden md:-mt-px md:flex">
          <span className="text-white">
            Página {page} de {totalPages}
          </span>
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-white">
              Siguiente
              <ArrowLongRightIcon
                className="ml-3 h-5 w-5 text-white"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
