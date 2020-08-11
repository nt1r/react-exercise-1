import React from 'react';
import PropTypes from 'prop-types';

class YearLabel extends React.Component {
  static get propTypes() {
    return {
      year: PropTypes.number,
    };
  }

  render() {
    return <h4 className={'year_label'}>{this.props.year}</h4>;
  }
}

export default YearLabel;
