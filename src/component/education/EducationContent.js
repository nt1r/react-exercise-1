import React from 'react';
import PropTypes from 'prop-types';

class EducationContent extends React.Component {
  static get propTypes() {
    return {
      contentTitle: PropTypes.string,
      content: PropTypes.string,
    };
  }

  render() {
    return (
      <div className={'education_content'}>
        <h2>{this.props.contentTitle}</h2>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default EducationContent;
