const initialData = []


export const noteReducer = (
  state = initialData,
  action
) => {
  switch (action.type) {
    case "NOT_EKLE":
      return [...state,action.payload];
      break;


    case "NOT_SIL":
      const newList = state.filter((p) => p.id !== action.payload);
      return newList


    default:
      return state;
      break;
  }
};