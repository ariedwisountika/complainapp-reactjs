import React, { Component } from "react";
import "./InformasiData.css";
import axios from "axios";

class InformasiStatusPelaporan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {}

  async getData() {
    axios.get("api/tindaklanjut").then((res) => {
      const getData = res.data.data;
      console.log("tes : " + JSON.stringify(res.data.data));
      this.setState({ lists: getData });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Informasi Status Pelaporan</h2>

        <table id="t01">
          <tr>
            <th>Nama</th>
            <th>Waktu</th>
            <th>Status</th>
            {/* <th>Tindaklanjut</th> */}
          </tr>

          {this.state.lists.map((data, index) => {
            if (index > -1) {
              // skip the first element since it's already used above
              return (
                <tr key={index.toString()}>
                  <td>{data.name}</td>
                  <td>{data.datetime}</td>
                  <td>{data.status}</td>
                  {/* <td>{</td> */}
                </tr>
              );
            }
          })}
        </table>
      </div>
    );
  }
}

export default InformasiStatusPelaporan;
