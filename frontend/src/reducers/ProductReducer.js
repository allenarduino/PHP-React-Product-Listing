export const productReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'DELETE_SELECTED_PRODUCTS':
      return {
        ...state,
        products: state.products.filter((product) => !action.payload.includes(product.id)),
      };

    default:
      return state;
  }
};
