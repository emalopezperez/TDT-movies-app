import "./pagination.scss";

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
    <div className="pagination">
      {page > 1 && (
        <button onClick={() => handlePageChange(page - 1)}>Anterior</button>
      )}

      <span>
        Página {page} de {totalPages}
      </span>

      {page < totalPages && (
        <button onClick={() => handlePageChange(page + 1)}>Siguiente</button>
      )}
    </div>
  );
};

export default Pagination;
