import RatingIcon from "../media/star.png"

const Table = ({data}) => {
    let count = 0
    return (
        <>
            <div className="table-space">
                <table className="main-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.movies &&
                            data.movies.map((item) => {
                                return (
                                    <tr className="main-row" key={item._id}>
                                        <td><img className="table-img" src={item.img} alt={item.name} /></td>
                                        <td>{++count}</td>
                                        <td>{item.name} ({item.year})</td>
                                        <td>{item.genre.join(', ')}</td>
                                        <td><img className="rating" src={RatingIcon} alt="Rating" />{item.rating}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table