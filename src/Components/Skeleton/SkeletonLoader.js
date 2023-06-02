import React from "react";
import { Spinner } from "react-bootstrap";
import "./skeleton.scss";

const MyLoader = (props) => (
  <div className="loader-spinner">
    <Spinner animation="grow" variant="dark" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="dark" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="dark" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="dark" />
    <Spinner animation="grow" variant="secondary" />
  </div>
);

export default MyLoader;
