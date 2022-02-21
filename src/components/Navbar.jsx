import React from 'react';

const Navbar = ({setQuery}) => {
  const changeQuery = (event) => {
    event.preventDefault();
    setQuery(event.target[0].value)
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Random People</span>
        <form className="d-flex" onSubmit={changeQuery}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
