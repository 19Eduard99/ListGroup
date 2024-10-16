import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

// eslint-disable-next-line react/prop-types
const ListGroup = ({ children }) => {
  return (
    <ul className="list-group">
      {React.Children.map(children, (child, index) => (
        <li className="list-group-item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
