import React from "react";
import { connect } from "react-redux";
import { fetchCatTypes } from "./actionCreators";

import Information from "./Information";
import List from "./List";

class AllCats extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <Information information="Click on your favourite cat explore its photo" />
        <List items={this.props.catTypes} url="./images/" type="all"/>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchCatTypes();
  }
}

const mapStateToProps = state => {
  return {
    catTypes: state.catTypes
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCatTypes() {
    dispatch(fetchCatTypes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCats);
