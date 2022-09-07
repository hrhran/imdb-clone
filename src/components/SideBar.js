import { memo } from "react";

const SideBar = ({ data, checkHandler }) => {
    return (
        <>
            <div className="sidebar">
                <hr />
                <span className="sidebar-title">Explore Movies by Genre.</span>
                <ul className="genres">
                    {data.genres &&
                        data.genres.map((item, index) => {
                            return <li key={index}><input type="checkbox" value={item} onChange={checkHandler} /> {item}</li>;
                        })}
                </ul>
            </div>
        </>
    )
}

export default memo(SideBar)