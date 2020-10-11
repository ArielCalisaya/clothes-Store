import {
  CLOTHES_LIST_REQUEST,
  CLOTHES_LIST_SUCCESS,
  CLOTHES_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../types/clothesTypes";
import axios from "axios";

const clothesList = () => async (dispatch) => {
  try {
      dispatch({ type: CLOTHES_LIST_REQUEST });
    const { data } = await axios.get("/api/clothes/all");
      dispatch({
        type: CLOTHES_LIST_SUCCESS,
        payload: data.result,
      });
      
  } catch (error) {
    dispatch({
      type: CLOTHES_LIST_FAIL,
      payload: error.message,
    });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  // probar poner aqui problema al renderizar contenido de objeto talla_L
  // dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get(`/api/clothes/get/${productId}`);
    dispatch({ 
        type: PRODUCT_DETAILS_SUCCESS, 
        payload: data.result 
    });
  } catch (error) {
    dispatch({ 
        type: PRODUCT_DETAILS_FAIL, 
        payload: error.message 
    });
  }
};

export { clothesList, detailsProduct };