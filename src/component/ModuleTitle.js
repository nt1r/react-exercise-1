import React from 'react';
import '../styles/module_title.scss';
import PropTypes from 'prop-types';

class ModuleTitle extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.string,
    };
  }

  render() {
    return <h3 className={'module_title'}>{this.props.title}</h3>;
  }
}

export default ModuleTitle;
