import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
const images = [];
// const images = [
//   "//placekitten.com/1500/500",
//   "//placekitten.com/4000/3000",
//   "//placekitten.com/800/1200",
//   "//placekitten.com/1500/1500",
// ];
class DetailPelapor extends Component {
  fileObj = [];
  images2 = [];
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      photoIndex: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let getIdx = this.props.match.params.idx;
    axios.defaults.baseURL = window.location.href.origin;
    // axios.defaults.baseURL = "http://api.openweathermap.org";
    axios.get(getIdx).then((res) => {
      const getUser = res.data.data;
      console.log("tes : " + JSON.stringify(res.data.data));
      this.setState({ user: getUser });
      console.log(this.state);
      this.fileObj.push(this.state.user.imgCollection);
      for (let i = 0; i < this.fileObj[0].length; i++) {
        images.push(this.fileObj[0][i]);
        // console.log(this.fileObj[0][i]);
      }
      console.log("fsfsfsdfds");
      console.log(this.fileObj);
      console.log(this.fileObj[0].length);
      console.log(this.fileObj[0]);
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <div class="container-fluid">
          <div class="card mx-auto ">
            <div class="card-header">
              <h3>Informasi Lengkap dari : {this.state.user.name}</h3>
              {/* <h3>Informasi Lengkap Pelapor {this.props.match.params.idx}</h3> */}
            </div>
            <div class="card-body">
              <h5 class="card-title">{this.state.user.topic}</h5>
              <p class="card-text">{this.state.user.info}</p>
              <a href="#" class="card-link">
                {this.state.user.phone}
              </a>
              <a href="#" class="card-link">
                {this.state.user.email}
              </a>
              <br />
              <br />
              <a
                href="#"
                class="btn btn-primary"
                onClick={() => {
                  //   this.images = [];
                  this.setState({ isOpen: true });
                }}
              >
                Bukti gambar
              </a>
              <hr />
              <footer class="blockquote-footer">
                {this.state.user.datetime}
                {/* {() => {
                  var date = new Date(this.state.userdatetime);
                  var YYYY = date.getFullYear();
                  var DD = date.getMonth() + 1;
                  var MM = date.getDate();
                  var HH = date.getHours();
                  var mm = date.getMinutes();
                  var ss = date.getSeconds();

                  return (
                    YYYY + "-" + MM + "-" + DD + " " + HH + ":" + mm + ":" + ss
                  );
                }} */}
                {/* Someone famous in <cite title="Source Title">Source Title</cite> */}
              </footer>
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

DetailPelapor.propTypes = {};

export default DetailPelapor;
