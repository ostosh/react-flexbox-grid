import React, {Component} from 'react';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from 'flexboxgrid';

export default class Grid extends Component {
  render() {
    const containerClass = style[this.props.fluid ? 'container-fluid' : 'container'];
    const className = classNames(this.props.className, containerClass);

    return React.createElement(this.props.tagName || 'div', Object.assign({}, omit(this.props, ['fluid', 'className', 'tagName']), {
      className
    }), this.props.children);
  }
}

Grid.propTypes = {
  fluid: PropTypes.any,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};
