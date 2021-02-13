import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./../history";
import "./Home.css";
import Chatbox from "../components/Chatbox";
export default class Home extends Component {
  render() {
    return (
      <div>
      <header>
        <div align="center">
        <img src="image/gamabar1.png" alt="gamabar1"position='absolute'
    bottom="0"
    left="0"
    width="1225px"
    height="650px"
    background="red" />
        </div>
      </header>
      <section className="my-5">
        <div className="container">
          <div className="row">
         
            <div className="col-md-8 mx-auto">
               
            
            
              
               <p> {""}Dibentuk untuk merealisasikan kebijakan “no wrong door policy”
                yang menjamin hak masyarakat agar pengaduan dari manapun dan
                jenis apapun akan disalurkan kepada penyelenggara pelayanan
                publik yang berwenang menanganinya.</p>{""}
                <p>
                {" "}
                bertujuan agar Penyelenggara dapat mengelola pengaduan dari
                masyarakat secara sederhana, cepat, tepat, tuntas, dan
                terkoordinasi dengan baik Penyelenggara memberikan akses untuk
                partisipasi masyarakat dalam menyampaikan pengaduan dan
                Meningkatkan kualitas pelayanan publik.{" "}
                
               
              </p>
              
              <Button
              variant="btn btn-success"
              onClick={() => history.push("/DataMasuk")}
              
            >
              CEK DATA MASUK
            </Button>
           
            </div>
            <div>
          <Chatbox />
        </div>
          </div>
        </div>
      </section>
      
    </div>
    
    );
  }
}
