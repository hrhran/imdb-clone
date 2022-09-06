import { getMovies} from './types'
import axios from 'axios'

export const fetchMovies = (url) => async dispatch => {
    console.log(url)
    const res = await axios.get(url)
    console.log(res)
    dispatch({type: getMovies, payload: res.data})
}


