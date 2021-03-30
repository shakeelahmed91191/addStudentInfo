import React from "react";
import { addUser, deleteUser, updateUser, addUser } from "../Action/Users";
import { connect } from "react-redux";

const userData = (props) => {
  mapStateToProps.getUser;
};

const mapStateToProps = (state) => {
  return {
    getUser: state.userReducer.getUser,
  };
};

export default connect(mapStateToProps, {
  addUser,
  deleteUser,
  updateUser,
  getUser,
})(userData);
