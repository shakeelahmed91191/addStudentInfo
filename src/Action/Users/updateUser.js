import React from "react";

const updateUser = (payload) => {
  return {
    type: "update_user",
    payload,
  };
};
export default updateUser;
