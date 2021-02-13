import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DataMasuk from "./DataMasuk/DataMasuk";
import StatusData from "./StatusData/StatusData";
import FormData from "./FormData/FormData";
import FormData2 from "./FormData/FormData2";
import Home from "./Home/Home";
import history from "./history";
import InformasiData from "./InformasiData/InformasiData";
import InformasiStatus from "./InformasiData/InformasiStatusPelaporan";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/DataMasuk" component={DataMasuk} />
          <Route path="/StatusData" component={StatusData} />
          <Route path="/FormData" component={FormData} />
          <Route path="/FormData2" component={FormData2} />
          <Route path="/InformasiData" component={InformasiData} />
          <Route path="/InformasiStatus" component={InformasiStatus} />
        </Switch>
      </Router>
    );
  }
}
