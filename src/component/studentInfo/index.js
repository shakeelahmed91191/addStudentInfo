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
  ModalFooter,
} from "reactstrap";
import { addUser } from "../../Action/Users";

const studentinfom = new StudentInfom();

const StudentInfoForm = (props) => {
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
      name == "" ||
      email == "" ||
      reg_no == "" ||
      cellno == "" ||
      gender == "" ||
      address == "" ||
      class_name == ""
    ) {
      alert("Please fill all the fields");
    } else {
      const dataValues = {
        name: name,
        email: email,
        reg_no: reg_no,
        cellno: cellno,
        gender: gender,
        address: address,
        class_name: class_name,
      };
      studentinfom.addStudentInfo(dataValues, props);
      props.adduser(dataValues);
    }
  };

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>
        {props.name}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setAddress(e.target.value)}
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
                    onChange={(e) => setRegNo(e.target.value)}
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
                    onChange={(e) => setGender(e.target.value)}
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
                    onChange={(e) => setCellNo(e.target.value)}
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
                    onChange={(e) => setClas(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Button
                  color="primary"
                  onClick={() => {
                    submitData();
                  }}
                >
                  Submit
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
export default StudentInfoForm;
