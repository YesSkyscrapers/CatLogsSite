import "./Pagination.css"

const Pagination = ({
    pageIndex,
    maxPageSize,
    onPageChange
}) => {
    return (
        <div className="pagination">
            <div onClick={(() => onPageChange(Number(pageIndex) - 1))} className={pageIndex > 0 ? "paginationRect" : "hiddenRect"}>
                {"<"}
            </div>

            <div className="paginationRect">
                {Number(pageIndex) + 1}
            </div>
            {
                <div onClick={(() => onPageChange(Number(pageIndex) + 1))} className={pageIndex < maxPageSize ? "paginationRect" : "hiddenRect"}>
                    {">"}
                </div>
            }
        </div>
    )
}

export default Pagination