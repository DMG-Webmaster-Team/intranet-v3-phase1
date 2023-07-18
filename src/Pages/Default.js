import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Text } from "../containers/Language";

class Default extends Component {
  render() {
    return (
      <div className=" text-uppercase pt-5 text-center ">
        <h1 className="text-center text-uppercase text-muted pt-5">
          <Text tid="defaultPage"></Text>
        </h1>

        <Link to={`/`} style={{ marginTop: "2rem" }}>
          <Button className="default-btn">
            <Text tid="defaultBtn"></Text>
          </Button>
        </Link>
      </div>
    );
  }
}

export default Default;
