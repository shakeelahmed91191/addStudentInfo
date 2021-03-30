import React from "react";

const deleteUser = (payload) => {
  return {
    type: "delete_user",
    payload,
  };
};
export default deleteUser;
