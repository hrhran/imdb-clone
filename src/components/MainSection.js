import MainFilters from "./MainFilters"
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
                <MainFilters 
                    searchHandler={searchHandler}
                    sortHandler={sortHandler}
                    sortOrderHandler={sortOrderHandler}
                    perHandler={perHandler}
                    sortArrow={sortArrow}
                />
                <Table data={data} />
                <div className="pages">
                    {renderPagination(pages.current)}
                </div>
            </div>
        </>
    )
}

export default MainSection