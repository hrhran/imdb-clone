import Table from "./Table"

const MainSection = ({data, searchHandler, sortHandler, sortOrderHandler, perHandler, renderPagination, sortArrow, params, pages, setQuery}) => {
    return (
        <>
            <div className="main-section">
                <div className="title-space">
                    <div className="heading">IMDb Charts</div>
                    <div className="sub-heading">IMDb Top Movie Picks</div>
                    <div className="sub-title">IMDb Top movies as rated by regular IMDb voters.</div>
                    <hr />
                </div>
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
                <Table data={data} />
                <div className="pages">
                    {renderPagination(pages.current)}
                </div>
            </div>
        </>
    )
}

export default MainSection