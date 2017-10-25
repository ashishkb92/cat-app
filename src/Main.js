import React from "react";
import Information from "./Information";
import AllCats from "./AllCats";
import CatDetail from "./CatDetail";
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
        <Switch>
      <Route exact path='/' component={AllCats}/>
      <Route path='/:cat' component={CatDetail}/>
    </Switch>
  
    );
  }
}

export default Main;