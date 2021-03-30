import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { addUser, deleteUser, getUser, updateUser } from "../../Action/Users";
import StudentInfoForm from "../../component/studentInfo";
import UpdateStdInfo from "../../component/updatestdInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCheck, FaUserEdit } from "react-icons/fa";
import { AiTwotoneDelete, AiFillFileAdd } from "react-icons/ai";
import { connect } from "react-redux";
import { faRoad } from "@fortawesome/free-solid-svg-icons";
import studentInfo from "../../Apis/studentInfo";

const studentdata = new studentInfo();

const Home = (props) => {
  const [stdData, setstdData] = useState([]);
  useEffect(() => {
    studentdata.getStudentData(props);
    console.log(props.userData);
    if (props.userData != undefined) {
      setstdData(props.userData);
    }
  });

  const deleteData = (props, studentid) => {
    studentdata.deleteStudentInfo(props, studentid);
  };

  return (
    <Container fluid={true}>
      <Navbar color="faded" primary className="bg-dark">
        <NavbarBrand href="./" className="mr-auto">
          StudentInfo
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="./">
              <StudentInfoForm
                name={"Add Student"}
                btn="Add"
                adduser={props.addUser}
                edit={<AiFillFileAdd style={{ fontSize: "30px" }} />}
              />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Row>
        <Col lg="12">
          <Table striped bordered dataSource={stdData}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Reg_No</th>
                <th>CellNo</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Class</th>
                {/* <th>DOB</th> */}
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {stdData.map((datavalues, id) => {
                return (
                  <tr>
                    <th scope="row">{id}</th>
                    <td>{datavalues.name}</td>
                    <td>{datavalues.email}</td>
                    <th>{datavalues.reg_no}</th>
                    <th>{datavalues.cellno}</th>
                    <th>{datavalues.gender}</th>
                    <td>{datavalues.address}</td>
                    <td>{datavalues.class_name}</td>
                    {/* <td>{datavalues.dob}</td> */}
                    <th>
                      <UpdateStdInfo
                        edit={<FaUserEdit />}
                        btn="Update"
                        datavalues={datavalues}
                      />
                    </th>
                    <th>
                      <button
                        className="bg-dark border-0 text-white"
                        onClick={() => deleteData(datavalues.id)}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  console.log(state, "m datas");
  return {
    userData: state.userReducer.getUsersData,
  };
};

export default connect(mapStateToProps, {
  addUser,
  deleteUser,
  getUser,
  updateUser,
})(Home);
