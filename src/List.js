import React from "react";
import { Link } from "react-router-dom";

import Item from "./Item";

const List = ({ items, url, type = "" }) => {
  const returnList = () => {
    if (type === "all") {
      return items.map(item => (
        <Link to={`/${item}`}>
          <Item item={item} url={url} />
        </Link>
      ));
    } else {
      return items.map(item => <Item item={item} url={url} />);
    }
  };

  return <div className="image-wrapper">{returnList()}</div>;
};

export default List;
