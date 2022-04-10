import React, { Component } from "react";
import axios from "axios";
import { VerticalAlignBottom } from "@material-ui/icons";

class GetStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: {},
      std1: 0,
    };
  }

  axiosData = async function () {
    console.log(this.state.std1);
    try {
      var catchData = await axios.get(
        `http://localhost:3002/student/${this.state.std1}`
      );
      this.returnData(catchData);
    } catch (error) {
      console.log(error);
    }
  };

  returnData(e) {
    // var MyArr = [];
    // e.data.map((ele) => {
    //   if (this.props.MyParam == ele.stdId) {
    //     MyArr.push(ele);
    //   }
    // }

    // this.setState({
    //   lists: MyArr,
    // });
    console.log(e.data);
    this.setState({ lists: e.data });
  }

  // componentDidMount() {
  //   axios.get("http://127.0.0.1:3002/student/:id").then((res) => {
  //     this.setState({ lists: res.data });
  //   });
  // }
  handleChange = (s) => {
    var newVal = s.target.value;
    console.log(newVal);
    this.setState({
      std1: newVal,
    });
  };
  render() {
    return (
      <div className="container-fluid m-2">
        <button
          className="text-white text-danger btn btn-success mt-5 ms-5"
          onClick={() => {
            this.axiosData();
          }}
        >
          Std-ID
        </button>
        <input
          type="text"
          value={this.state.std1}
          onChange={this.handleChange}
        />
        <div className="d-flex justify-content-center">
          <p>
            {" "}
            {this.state.lists.std_id} {this.state.lists.name_}{" "}
            {this.state.lists.job} {this.state.lists.place}{" "}
            {this.state.lists.salary}
          </p>
          <table className="table w-25 text-center table-bordereless border border-success table-hover table-respons">
            <tbody>
              {/* {this.state.lists.map((value) => {
                if (this.props.MyParam == value.std_id) {
                  return (
                    <>
                      <tr>
                        <th>Std-id</th>
                        <td>{value.std_id}</td>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <td>{value.name_}</td>
                      </tr>
                      <tr>
                        <th>Marks</th>
                        <td>{value.place}</td>
                      </tr>
                      <tr>
                        <th>Place</th>
                        <td>{value.salary}</td>
                      </tr>
                      <tr>
                        <th>Job</th>
                        <td>{value.job}</td>
                      </tr>
                    </>
                  );
                }
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default GetStudent;
