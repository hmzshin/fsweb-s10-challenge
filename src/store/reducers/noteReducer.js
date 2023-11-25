const initialData = []

export const noteReducer = (
  state = initialData,
  action
) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, list: action.payload, total: action.payload.length };
      break;

    case "SET_TITLE":
      return { ...state, title: action.payload };
      break;

    case "SET_PRODUCT":
      return { ...state, product: action.payload };
      break;

    case "DELETE_PRODUCT":
      const newList = state.list.filter((p) => p.id !== action.payload);
      return {
        ...state,
        list: newList,
        total: newList.length,
      };

    case "SET_PRODUCT_FETCH_STATE":
      return { ...state, fetchState: action.payload };

    default:
      return state;
      break;
  }
};