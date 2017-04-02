import React from 'react';

import Markdown from 'react-remarkable';

let customRequire = require.context('IMAGES/create-component-instructions/');

class OneStep extends React.Component {
    render() {
        return (
            <div className="step-container">
                <div className="step-header">
                    <p>{`Step ${this.props.index} ~ ${this.props.header}`}</p>
                </div>
                <div className="image-desc">
                    <img className="step-image" src={customRequire(`./${this.props.imageSrc}`)}/>
                    <Markdown>{this.props.description}</Markdown>
                </div>
            </div>
        )
    }
}

export default OneStep;