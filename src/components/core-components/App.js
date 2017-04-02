import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
function App(props) {
  return (
    <div>
      <Link className="btn btn-success m-10" to="/">Home</Link>
      <br/>
      {props.children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element
};

export default App;