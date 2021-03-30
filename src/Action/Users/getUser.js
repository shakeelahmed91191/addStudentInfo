import React from "react";

const getUser = (payload) => {
  return {
    type: "get_user",
    payload,
  };
};

export default getUser;
