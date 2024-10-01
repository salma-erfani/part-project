const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, idx) => idx + 1)

    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {pageNumbers.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={page === currentPage ? 'active' : ''}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination
