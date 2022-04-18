import "./Pagination.css"
import DownArrowImage from "../../images/down_arrow.png"

const Pagination = ({
    pageIndex,
    maxPageSize,
    onPageChange
}) => {
    return (
        <div className="pagination">
            <div onClick={(() => onPageChange(Number(pageIndex) - 1))} className={pageIndex > 0 ? "paginationRect" : "hiddenRect"}>
                <img src={DownArrowImage} className={pageIndex > 0 ? "PaginationLeftArrow" : "PaginationLeftArrowHidden"} />
            </div>
            {
                pageIndex > 3 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) - 4))} className="paginationRect">
                        {Number(pageIndex) - 3}
                    </div>
                )
            }
            {
                pageIndex > 2 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) - 3))} className="paginationRect">
                        {Number(pageIndex) - 2}
                    </div>
                )
            }
            {
                pageIndex > 1 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) - 2))} className="paginationRect">
                        {Number(pageIndex) - 1}
                    </div>
                )
            }
            {
                pageIndex > 0 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) - 1))} className="paginationRect">
                        {Number(pageIndex)}
                    </div>
                )
            }
            <div className="paginationRect ActivePagination">
                {Number(pageIndex) + 1}
            </div>
            {
                pageIndex < maxPageSize - 1 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) + 1))} className="paginationRect">
                        {Number(pageIndex) + 2}
                    </div>
                )
            }
            {
                pageIndex < maxPageSize - 2 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) + 2))} className="paginationRect">
                        {Number(pageIndex) + 3}
                    </div>
                )
            }
            {
                pageIndex < maxPageSize - 3 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) + 3))} className="paginationRect">
                        {Number(pageIndex) + 4}
                    </div>
                )
            }
            {
                pageIndex < maxPageSize - 4 && (

                    <div onClick={(() => onPageChange(Number(pageIndex) + 4))} className="paginationRect">
                        {Number(pageIndex) + 5}
                    </div>
                )
            }
            <div onClick={(() => onPageChange(Number(pageIndex) + 1))} className={pageIndex < maxPageSize - 1 ? "paginationRect" : "hiddenRect"}>
                <img src={DownArrowImage} className={pageIndex < maxPageSize - 1 ? "PaginationRightArrow" : "PaginationRightArrowHidden"} />
            </div>
        </div>
    )
}

export default Pagination