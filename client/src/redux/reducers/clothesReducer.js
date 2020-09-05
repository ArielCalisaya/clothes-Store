import {
  CLOTHES_LIST_REQUEST,
  CLOTHES_LIST_SUCCESS,
  CLOTHES_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../types/clothesTypes";

const clothesListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case CLOTHES_LIST_REQUEST:
      return { loading: true };
    case CLOTHES_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case CLOTHES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const clothesDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export { clothesListReducer, clothesDetailsReducer };
