import React from "react";

import Bengal from "./Bengal";
import AmericanBobtail from "./AmericanBobtail";
import Bombay from "./Bombay";
import Himalayan from "./Himalayan";
import List from "./List";
import Information from "./Information";

class CatDetail extends React.Component {
  render() {
    let renderDetail;
    let { cat } = this.props.match.params;
    switch (cat) {
      case "bengal":
        renderDetail = <Bengal />;
        break;
      case "bobtail":
        renderDetail = <AmericanBobtail />;
        break;
      case "bombay":
        renderDetail = <Bombay />;
        break;
      case "himalayan":
        renderDetail = <Himalayan />;
        break;
      default:
        renderDetail = null;
    }

    return (
      <div>
        <Information information="Use your browser history to go back to previous page" />
        <h1
          style={{
            textTransform: "uppercase"
          }}
        >
          {cat}
        </h1>
        <List items={attachNumber(cat, 4)} url="./images/" />
        <div className="jumbotron">{renderDetail}</div>
      </div>
    );
  }
}
function attachNumber(string, n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(`${string}${i}`);
  }
  return result;
}

export default CatDetail;
