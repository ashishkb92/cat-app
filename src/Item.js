import React from 'react';

const Item = ({item, url}) => <img className="img-rounded" src={require(`${url}${item}.jpg`)} width="375px" height="350px"/>

export default Item;
