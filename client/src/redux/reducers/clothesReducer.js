import {
  CLOTHES_LIST_REQUEST,
  CLOTHES_LIST_SUCCESS,
  CLOTHES_LIST_FAIL
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

export { clothesListReducer };
