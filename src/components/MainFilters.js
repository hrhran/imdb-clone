import { memo } from "react"

const areEqual = (prevProps, nextProps) => true;

const MainFilters = ({ searchHandler, sortHandler, sortOrderHandler, perHandler, sortArrow}) => {
    return (
        <>
            <div className="filters">
                <input type="text" name="search" onChange={searchHandler} />
                <div className="sort-group">
                    <span className="sort-title">Sort by:</span>
                    <select onChange={sortHandler}>
                        <option value="">None</option>
                        <option value="rating">Rating</option>
                        <option value="year">Release Date</option>
                    </select>
                    <div ref={sortArrow} className="arrow-up" onClick={sortOrderHandler}></div>
                </div>
                <div className="per-group">
                    <span className="per-title">Results per page</span>
                    <input type="text" name="per" onChange={perHandler} />
                </div>
            </div>
        </>
    )
}

export default memo(MainFilters, areEqual)