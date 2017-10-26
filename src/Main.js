import React from "react";
import { Switch, Route } from "react-router-dom";

import AllCats from "./AllCats";
import CatDetail from "./CatDetail";

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AllCats} />
        <Route path="/:cat" component={CatDetail} />
      </Switch>
    );
  }
}

export default Main;
