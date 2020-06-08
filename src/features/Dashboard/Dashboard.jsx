import React, { useState, useEffect } from "react";
import { Container, Circle } from "../../common/Basic/Basic";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  const [selected, setSelected] = useState(null);
  const links = [
    { id: "xyz123", name: "Clients", url: "/dashboard/clients" },
    { id: "xyz456", name: "Programs", url: "/dashboard/programs" },
    { id: "xyz789", name: "Settings", url: "/dashboard/settings" }
  ];

  const onSelect = item => {
    console.log("item >>>", item);
    setSelected(item.url);
  };

  return (
    <Container left>
      <section>
        <Circle>
          <h2>Avatar</h2>
        </Circle>
        <ul>
          {links.map((item, index) => (
            <li
              onClick={() => onSelect(item)}
              key={index}
              className={item.url === selected ? "is-active" : ""}
            >
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
          <li className="last">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </section>
      <main>
        {children}
        <br />
        <br />
        <br />
      </main>
    </Container>
  );
};

export default Dashboard;
