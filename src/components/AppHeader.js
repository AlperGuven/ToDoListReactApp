import React from "react";

//Class component
class AppHeader extends React.Component {
    constructor(props) {
        super(props);
      }
      render() {
        return <h1>{this.props.contentHeader}</h1>;
      }
  }
  
  export default AppHeader;