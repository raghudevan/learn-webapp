import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as homePageActions from '../actions/home-page';

class HomePage extends React.Component {

    onClick = () => {
        this.props.incrementCounter();
    }

    makeCall = () => {
      this.props.makeCall("https://api.ipify.org/?format=json", {
        method: "GET"
      }, 'GET_INFO');
    }

    render() {
      return (
        <div>
          <blockquote><p>Learn about actions here</p></blockquote>
          <button className="btn btn-primary m-10" onClick={this.onClick}>Increment Counter - sync action</button> { this.props.counter }
          <br/>
          <button className="btn btn-info m-10" onClick={this.makeCall}>Make Call - async action</button> <strong>{ JSON.stringify(this.props.info) }</strong>
        </div>
      );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.homePage.counter,
        info: state.homePage.info
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCounter: bindActionCreators(homePageActions.incrementCounter, dispatch),
        makeCall: bindActionCreators(homePageActions.makeCall, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);