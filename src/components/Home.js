import { useCallback, useEffect, useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import useDebounce from "../hooks/useDebounce"
import { fetchMovies } from "../redux/actions/dataActions"
import SideBar from "./SideBar"
import MainSection from "./MainSection"


const Home = () => {
    const baseUrl = "http://localhost:5000/api/movies?"
    const dispatch = useDispatch()

    const sortArrow = useRef(null)
    const pages = useRef(0)
    const params = useRef({genre:""})

    const [query, setQuery] = useState(new URLSearchParams(params.current).toString())
    const debouncedVal = useDebounce(query, 500)
    const data = useSelector(state => state.data)

    useEffect(() => {
        console.log("Fetching...")
        dispatch(fetchMovies(baseUrl+query)) 
    }, [debouncedVal])

    pages.current = Math.ceil(data.total / data.limit)
    
    const searchHandler = e => {
        params.current['search'] = e.target.value
        params.current['page'] = 1
        setQuery(new URLSearchParams(params.current).toString())
    }

    const checkHandler = e => {
        const { value, checked } = e.target;
        params.current['page'] = 1
        console.log(value, checked)
        if(checked)
            params.current['genre'] += "," + value
        else
            params.current['genre'] =params.current.genre.replace("," + value, "")
        setQuery(new URLSearchParams(params.current).toString())
    }

    const pageHandler = e => {
        console.log(e.target.innerHTML)
        params.current['page'] = e.target.innerHTML
        setQuery(new URLSearchParams(params.current).toString())
    }

    const sortHandler = e => {
        const sortString = params.current['sort']
        // params.current['page'] = 1
        if(e.target.value === ''){
            params.current['sort'] = ''
            sortArrow.current.style.transform = `rotate(0deg)`;
             
            setQuery(new URLSearchParams(params.current).toString())
            return
        }
        if(sortString){
                const sortArray = sortString.split(',')
                console.log("yo", sortArray[0])
                sortArray[0] = e.target.value
                params.current['sort'] = sortArray.join(',')

        }else {
            params.current['sort'] = e.target.value
        }
        setQuery(new URLSearchParams(params.current).toString())

    }

    const perHandler = e => {
        if(e.target.value <= data.total) {
            params.current['limit'] = e.target.value;
        }else{
            params.current['limit'] = data.total
            e.target.value = data.total
        }
        params.current['page'] = 1
        setQuery(new URLSearchParams(params.current).toString())

    }

    const sortOrderHandler = e => {
        let k
        let sortString = params.current['sort']
        if(sortArrow.current.style.transform === "rotate(180deg)"){
            //asc
            if(params.current.sort && params.current.sort !== ""){
                const sortArray = sortString.split(',')
                if(sortArray.length >= 1 && sortArray[0]!== ''){
                    sortArray[1] = 'asc'
                    params.current['sort'] = sortArray.join(',')
                }
            }
            k = 0
        }
        else{
            if(params.current.sort && params.current.sort !== ""){
                //desc
                const sortArray = sortString.split(',')
                if(sortArray.length >= 1 && sortArray[0]!== ''){
                    sortArray[1] = 'desc'
                    params.current['sort'] = sortArray.join(',')
                }
            }
            k = 180
        }
        setQuery(new URLSearchParams(params.current).toString())
        sortArrow.current.style.transform = `rotate(${k}deg)`;
    }

    const renderPagination = (num) => {
        const array = []
        for(let i=1; i <= num ; i++)
          array.push(<button key={i}onClick={pageHandler} className="page">{i}</button>)
        return (array.length)? array: "Data Not Found"
    }

    return (
        <>
            <div className="home-page">
                <div className="container">
                    <MainSection 
                        data={data}
                        searchHandler={searchHandler}
                        sortHandler={sortHandler}
                        sortOrderHandler={sortOrderHandler}
                        perHandler={perHandler}
                        renderPagination={renderPagination}
                        sortArrow={sortArrow}
                        params={params}
                        pages={pages}
                        setQuery={setQuery}
                    />
                    <SideBar data={data} checkHandler={checkHandler}/>
                </div>
            </div>
        </>
    );
}

export default Home