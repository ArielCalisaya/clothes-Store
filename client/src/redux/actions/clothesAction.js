import {CLOTHES_LIST_REQUEST, CLOTHES_LIST_SUCCESS, CLOTHES_LIST_FAIL} from '../types/clothesTypes'
import axios from 'axios'

const clothesList = () => async (dispatch)=> {
    try {
        dispatch({
            type: CLOTHES_LIST_REQUEST
        });
        const {data} =  await axios.get("/api/clothes/all")
        dispatch({
            type: CLOTHES_LIST_SUCCESS, 
            payload: data.result
        });
        
    } catch (error) {
        dispatch({ 
            type: CLOTHES_LIST_FAIL, 
            payload: error.message
        })
    }
}
export {clothesList}

// axios.get("/api/clothes/all").then((res) => {
//     console.log(res.data);
//     if (res.data.result.length > 0) {
//       setProduct(res.data.result);
//     } else {
//       console.log("Low Stock");
//     }
//   });
