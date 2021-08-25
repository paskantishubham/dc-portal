import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import BucAdnComponent from "../threadConnect/BucAdnComponent.js";
const UpdateSubscription = (props) => {
  const [initialValue, setinitialValue] = useState({
    Org: "",
    Space: "",
    BUC: "",
    ADN: "",
    Products: [],
  });
  console.log("props NewProvisioning", props);

  const resetValue = () => {
    setinitialValue({
      Org: "",
      Space: "",
      BUC: "",
      ADN: "",
      Products: [],
    });
  };
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormik01">
            <Form.Label className="select-label">Org</Form.Label>
            <select
              className="form-select classic form-height"
              // style={{ height: "40px" }}
            >
              <option defaultValue> Select Org </option>
              <option value="Org1">Org1</option>
              <option value="Org2">Org2</option>
              <option value="Org3">Org3</option>
            </select>
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormik03">
            <Form.Label className="select-label">Space</Form.Label>
            <select
              className="form-select classic form-height"
              // style={{ height: "40px" }}
            >
              <option defaultValue> Select Space </option>
              <option value="Space1">Space1</option>
              <option value="Space2">Space2</option>
              <option value="Space3">Space3</option>
            </select>
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>

          {/* <div role="group" aria-labelledby="checkbox-group">
                  <label>
                    <Field type="checkbox" name="Products" value="One" />
                    One
                  </label>
                  <label>
                    <Field type="checkbox" name="Products" value="Two" />
                    Two
                  </label>
                  <label>
                    <Field type="checkbox" name="Products" value="Three" />
                    Three
                  </label>
                </div> */}
          {/* </Form.Group> */}
        </Row>
        <Row
          className="mb-3 bucAdnComNew"
          // style={{ marginLeft: "40px" }}
        >
          <BucAdnComponent />
        </Row>
        <Row>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationFormik03"
            className="product-CheckBoxGroup"
            // style={{ display: "flex", marginTop: "30px" }}
          >
            <div id="checkbox-group">Products </div>
            <div
              className="product-checkBox"
              // style={{
              //   display: "flex",
              //   marginLeft: " 20px",
              // }}
            >
              <Form.Check
                label="ThreadConnect"
                type="checkbox"
                name="Products"
                value="ThreadConnect"
                id="Products"
              />
              <Form.Check
                label="EnterpriseConnect"
                type="checkbox"
                name="Products"
                value="EnterpriseConnect"
                id="Products"
                className="form-check"
                // style={{ marginLeft: " 10px" }}
              />
              <Form.Check
                label="DIVE"
                type="checkbox"
                name="Products"
                id="Products"
                value="DIVE"
                className="form-check"
                // style={{ marginLeft: " 10px" }}
              />
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3 UpdateSubmit">
          <Button type="submit">Submit</Button>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateSubscription;
