import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homePageActions from '../actions/home-page';

class HomePage extends React.Component {

    onClick = () => {
        console.log('123');
        this.props.incrementCounter();
    }

    render() {
      return (
        <div>
          <h2>Hello World!!123</h2>
          <button onClick={this.onClick}>increment counter</button> { this.props.counter }
        </div>
      );
    }
}

if(module.hot) {
    module.hot.accept();
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.homePage.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCounter: bindActionCreators(homePageActions.incrementCounter, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);