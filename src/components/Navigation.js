import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <ul className={props.listClass}>
      {props.items.map(item => (
        <li className={props.itemClass} key={item}>
          {props.sub ? (
            <NavLink
              to={`${props.matching}/${item
                .toLowerCase()
                .replace(/\s/g, '')}`}
            >
              {item}
            </NavLink>
          ) : (
            <Link
              to={
                item === 'Kontakt' ? item.toLowerCase() : 'proizvodi'
              }
            >
              {item}
            </Link>
          )}
        </li>
      ))}
      {props.search ? (
        <li className={props.itemClass}>{props.search}</li>
      ) : null}
      {props.dropdown ? (
        <li style={{ marginRight: 0 }} className={props.itemClass}>
          {props.dropdown}
        </li>
      ) : null}
    </ul>
  );
}

export default Navigation;
