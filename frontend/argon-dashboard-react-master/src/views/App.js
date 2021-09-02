import axios from "axios";

import React, { useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import AdminNavbar from "components/Navbars/AdminNavbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const App = (props) => {
  const [title, setTitle] = useState("no title");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const handleClick = (e) => {
    axios
      .get("http://127.0.0.1:8000/api/entries", { params: {} })
      .then((results) => {
        setTitle(results.data[0].title);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>

      </Container>
    </>
  );
};

export default App;
