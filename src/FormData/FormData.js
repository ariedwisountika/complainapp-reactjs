import React, { Component } from "react";
import "./FormData.css";
import axios from "axios";

export default class Login extends Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      imgCollection: "",
      fname: "",
      notelp: "",
      email: "",
      topik: "",
      info: "",
      file: [null],
    };
  }

  // handleChange(event) {
  //   // this.setState({ value: event.target.value });
  //   alert(event.target.value);

  //   console.log(event);
  // }

  onFileChange(e) {
    //=============
    this.fileObj = [];
    this.fileArray = [];
    this.setState({ imgCollection: "" });
    this.setState({ imgCollection: e.target.files });
    //=============
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
    // @@@@@@@@@
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    // return false;
    var formData = new FormData();
    //=============
    for (const key of Object.keys(this.state.imgCollection)) {
      formData.append("imgCollection", this.state.imgCollection[key]);
    }
    //=============
    // formData.append("multiUpload", this.state.file);
    // @@@@@@@@@
    formData.append("fname", this.state.fname);
    formData.append("notelp", this.state.notelp);
    formData.append("email", this.state.email);
    formData.append("topik", this.state.topik);
    formData.append("info", this.state.info);
    // formData.append("testinput", "test aja aaa");
    // formData.append("testlagi", "test aja lagi");
    // formData.append("testcoba", "test aja coba");
    console.log(this.state.imgCollection);
    console.log([...formData]);

    axios
      .post("http://localhost:5000/api/upload-images", formData, {})
      .then((res) => {
        console.log(res.data);
        this.fileObj = [];
        this.fileArray = [];
        this.setState({ fname: "" });
        this.setState({ notelp: "" });
        this.setState({ email: "" });
        this.setState({ topik: "" });
        this.setState({ info: "" });
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="data">
          <label>Masukan Nama</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Masukan nama.."
            value={this.state.fname}
            onChange={(event) => this.setState({ fname: event.target.value })}
          />
          <label>No telfon</label>
          <input
            type="text"
            id="notelp"
            name="notelp"
            placeholder="Masukan nomor telfon.."
            value={this.state.notelp}
            onChange={(event) => this.setState({ notelp: event.target.value })}
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukan email"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <label>Topik Laporan/Pengaduan</label>
          <input
            type="text"
            id="topik"
            name="topik"
            placeholder="Masukan kejadian.."
            value={this.state.topik}
            onChange={(event) => this.setState({ topik: event.target.value })}
          />

          <label>Keterangan / Informasi</label>
          <textarea
            id="info"
            name="info"
            placeholder="Masukan Kejadian.."
            value={this.state.info}
            onChange={(event) => this.setState({ info: event.target.value })}
          ></textarea>

          <div className="form-group multi-preview">
            {(this.fileArray || []).map((url) => (
              <img src={url} alt="..." />
            ))}
          </div>

          <div className="form-group">
            <label>Upload gambar bukti laporan</label>
            <input
              type="file"
              className="form-control"
              name="imgCollection"
              onChange={this.onFileChange}
              multiple
            />
          </div>
          {/* <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={this.uploadFiles}
          >
            Upload
          </button> */}
          <br></br>
          <button type="submit" className="btn btn-primary btn-block">
            Proses
          </button>
          {/* <input type="submit" value="Submit" /> */}
        </div>
      </form>
    );
  }
}
