import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OneStep from "CORECOMPS/instructions/OneStep";

class HomePage extends React.Component {

  renderSteps = (steps) => {
    return steps.map((step, index) => <OneStep { ...step } index={index+1}/>);
  }


  render() {
    let footerMsg = `If you get stuck at any step,
    please feel free to write to me at raghudevan.s@mu-sigma.com`;

    return (
      <div>
        <blockquote><p>Hello Learners!</p><footer>{footerMsg}</footer></blockquote>
        {
          this.renderSteps(this.props.steps)
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
        steps: state.homePage.steps
    };
}

export default connect(mapStateToProps, null)(HomePage);