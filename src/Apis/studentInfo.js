import api_url from "./api_url";
import axios from "axios";

class StudentInfom {
  async addStudentInfo(studentdata, props) {
    console.log(studentdata);
    try {
      const response = await axios
        .post(api_url + "addStudents", studentdata, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response);
        });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async getStudentData(props) {
    try {
      const responses = await axios.get(api_url + "getStudentList");

      if (responses.data.response == "success") {
        console.log(responses.data.message, "data m");
        props.getUser(responses.data.message);
      } else {
        props.getUser([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateStudentInfo(studentdata, props) {
    try {
      const response = await axios
        .post(api_url + "updateStudents", studentdata, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          // console.log(response);
          props.updateUser(response.data.message);
        });
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteStudentInfo(studentid, props) {
    try {
      const responses = await axios.get(
        api_url + "deleteStudent?id=" + studentid
      );
      if (responses.data.response == "success") {
        props.deleteUser(studentid);
      } else {
      }

      console.log(responses);
      // console.log(responses.data.message);
    } catch (error) {
      console.log(error);
    }
  }
}

export default StudentInfom;
