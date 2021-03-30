import React, { useState } from "react";
import StudentInfom from "../../Apis/studentInfo";

import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
// import { addUser } from "../../Action/Users";

const studentinfom = new StudentInfom();

const UpdateStd = (props) => {
  // console.log(props.datavalues);
  const [Id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  // const [dob, setDob] = useState("");
  const [class_name, setClas] = useState("");
  const [reg_no, setRegNo] = useState("");
  const [gender, setGender] = useState("");
  const [cellno, setCellNo] = useState("");

  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const submitData = () => {
    if (
      name == null ||
      email == null ||
      reg_no == null ||
      cellno == null ||
      gender == null ||
      address == null ||
      class_name == null
    ) {
      alert("Please fill all the fields");
    } else {
      const dataValues = {
        id: props.datavalues.id,
        name: name,
        email: email,
        reg_no: reg_no,
        cellno: cellno,
        gender: gender,
        address: address,
        class_name: class_name,
      };

      console.log(dataValues);
      studentinfom.updateStudentInfo(dataValues, props);
      // props.addUser(dataValues);
    }
  };

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {props.btn}
      </Button> */}
      <a onClick={toggle}>{props.edit}</a>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Student</ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleName">NAME</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleName"
                    placeholder="Student Name"
                    defaultValue={props.datavalues.name}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setName(e.target.defaultValue);
                      } else {
                        setName(e.target.value);
                      }
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Student Email"
                    defaultValue={props.datavalues.email}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setEmail(e.target.defaultValue);
                      } else {
                        setEmail(e.target.value);
                      }
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                id="exampleAddress"
                placeholder="1234 Main St"
                defaultValue={props.datavalues.address}
                onChange={(e) => {
                  if (e.target.value == "") {
                    setAddress(e.target.defaultValue);
                  } else {
                    setAddress(e.target.value);
                  }
                }}
              />
            </FormGroup>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="reg_no">Reg_No</Label>
                  <Input
                    type="reg_no"
                    name="reg_no"
                    id="reg_no"
                    defaultValue={props.datavalues.reg_no}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setRegNo(e.target.defaultValue);
                      } else {
                        setRegNo(e.target.value);
                      }
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="gender">Gender</Label>
                  <Input
                    type="gender"
                    name="gender"
                    id="gender"
                    defaultValue={props.datavalues.gender}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setGender(e.target.defaultValue);
                      } else {
                        setGender(e.target.value);
                      }
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="cellno">Cell No</Label>
                  <Input
                    type="cellno"
                    name="cellno"
                    id="cellno"
                    defaultValue={props.datavalues.cellno}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setCellNo(e.target.defaultValue);
                      } else {
                        setCellNo(e.target.value);
                      }
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              {/* <Col md={6}>
                <FormGroup>
                  <Label for="DOB">DOB</Label>
                  <Input
                    type="date"
                    name="dob"
                    id="exampleDob"
                    onChange={(e) => setDob(e.target.value)}
                  />
                </FormGroup>
              </Col> */}
              <Col md={6}>
                <FormGroup>
                  <Label for="Class">Class</Label>
                  <Input
                    type="text"
                    name="class"
                    id="exampleClass"
                    placeholder="Enter Class"
                    defaultValue={props.datavalues.class_name}
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setClas(e.target.defaultValue);
                      } else {
                        setClas(e.target.value);
                      }
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Button color="primary" onClick={() => submitData()}>
                  {props.btn}
                </Button>
              </Col>
              <Col
                md={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              ></Col>
            </Row>
          </Form>
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={toggle}>
            {props.btn}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};
export default UpdateStd;
