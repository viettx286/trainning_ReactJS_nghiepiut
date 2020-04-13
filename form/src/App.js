import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  onHandleSubmit(event) {
    // Chặn submit , tự load lại trang
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="container mt-30">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h3 className="panel-title">Form</h3>
                </div>
                <div className="panel-body">
                  <form onSubmit={this.onHandleChange}>
                    <div className="form-group">
                      <label>Username</label>
                      <input
                        type="text"
                        className="form-control"
                        name="txtName"
                        onChange={this.onHandleSubmit}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                    &nbsp;
                    <button type="reset" className="btn btn-danger">
                      Xóa
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
