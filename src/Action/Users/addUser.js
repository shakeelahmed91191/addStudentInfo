import React from "react";

const addUser = (payload) => {
  return {
    type: "add_user",
    payload,
  };
};

export default addUser;
