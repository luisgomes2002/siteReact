import { Component } from "react";

class TabsJlpt extends Component {
  constructor(props) {
    super(props);
    this.state = { visivel: false };
  }

  toggleElemento = () => {
    this.setState({ visivel: !this.state.visivel })
  }

  render() {
    return (
      <div>
        <h2>AULAS</h2>
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <button className="box-items" onClick={this.toggleElemento}>
              <h1>JLPT</h1>
            </button>
          </div >
        </div >
        {this.state.visivel && <Jlpt />}
      </div >
    )
  }
}