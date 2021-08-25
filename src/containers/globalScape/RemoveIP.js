import React, { Fragment } from "react";
import { Modal, Button } from 'react-bootstrap';


export default class RemoveIP extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container-lg w-100 p-3 borderStyle mb-5">
      <h5>Remove IP From Ban List</h5>
      <form>
        <div className="form-group row">
          <label for="inputPassword" className="col-sm-3 col-form-label">IP Address</label>
          <div className="col-sm-6">
            <i className="fa fa-user icon"></i>
            <input className="form-control form-control-sm" type="text" id="gs_eve-name" name="gs_eve-name" value={this.props.eventName} />
          </div>
        </div>
        <div className="form-group row">
        <div className="col-sm-10 text-center">
          <Button variant="primary" onClick="">
            Remove from Ban List
          </Button>
          </div>
        </div>
      </form>
    </div>
    );
  }
}
