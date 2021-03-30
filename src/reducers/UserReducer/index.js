const userReducer = (state = [], action) => {
  const { type, payload } = action;
  if (type === "add_user") {
    return {
      ...state,
      payload,
    };
  } else if (type === "delete_user") {
    return {
      ...state,
      getUsersData: state.getUsersData.filter(
        (datavalues) => datavalues.id != payload
      ),
    };
  } else if (type == "update_user") {
    if (payload.length == undefined) {
      return state;
    } else {
      return payload;
    }
  } else if (type == "get_user") {
    return {
      ...state,
      getUsersData: payload,
    };
  }

  return state;
};

export default userReducer;
