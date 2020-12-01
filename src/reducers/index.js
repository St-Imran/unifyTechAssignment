import * as types from '../actions/types';

export default function productReducer(state = { data: [], filteredData: [], selectedFilter: null }, action) {
  switch (action.type) {
    case types.SAVE_PRODUCT_DATA:
      return {
        ...state,
        data: action.data,
        filteredData: action.data
      };
    case types.SET_SELECTED_VARIANT:
      return {
        ...state,
        filteredData: state.filteredData.map((item) => {
          if (item.id === action.id) {
            return { ...item, selectedVariant: action.data }
          }
          return item
        }),
        ...action.isDefault && {
          data: state.data.map((item) => {
            if (item.id === action.id) {
              return { ...item, selectedVariant: action.data }
            }
            return item
          })
        }
      };
    case types.SET_FILTER:
      const filteredData = state.data.filter(
        (product) => {
          return product.Variant.some(
            (product_variant) => { return product_variant.color === action.data })
        });
      return {
        ...state,
        selectedFilter: action.data,
        filteredData
      }
    default:
      return state;
  }
}