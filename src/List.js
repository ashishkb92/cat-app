import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const List = ({items, url, type =""}) => {
  if (type === "all"){
    return items.map(item=><Link to={`/${item}`}><Item item={item} url={url} /></Link>)
  } else {
    return items.map(item=><Item item={item} url={url} />)
  }
}

export default List;
