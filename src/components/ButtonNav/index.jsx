import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionMotion, spring, presets } from 'react-motion';

import './index.css';


class ButtonNav extends Component {
  static willEnter() {
    return {
      height: 0,
      opacity: 1,
    };
  }
  static willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.listClickHandler = this.listClickHandler.bind(this);
  }
  onClick(e) {
    e.preventDefault();
    this.setState({ open: true });
  }
  onBlur(e) {
    e.preventDefault();
    this.setState({ open: false });
  }
  getDefaultStyles() {
    return this.props.links.map(link => ({ ...link, style: { height: 0, opacity: 1 } }));
  }
  getStyles() {
    const { open } = this.state;
    const { links } = this.props;
    return links.filter(() => open)
      .map(link => ({
        ...link,
        style: {
          height: spring(60, presets.gentle),
          opacity: spring(1, presets.gentle),
        },
      }));
  }
  listClickHandler(data, e) {
    e.preventDefault();
    window.open(data);
    this.setState({ open: false });
  }
  render() {
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    const { title } = this.props;
    return (
      <header className="button-nav-header">
        <div className="button-nav-wrapper" onBlur={this.onBlur}>
          <button className="button-nav-menu-button" tabIndex="0" type="button" aria-label="Menu" onClick={this.onClick}>
            <span className="button-nav-span">
              <svg className="button-nav-hamburger" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </span>
          </button>
          <h2>{title}</h2>
        </div>
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles()}
          willLeave={ButtonNav.willLeave}
          willEnter={ButtonNav.willEnter}
        >
          {styles =>
            (
              <ul className="link-list">
                {styles.map(({ key, style, data }) => (
                  <li
                    key={key}
                    style={style}
                    onMouseDown={e => this.listClickHandler(data, e)}
                  >
                    {key}
                  </li>))}
              </ul>
            )
          }
        </TransitionMotion>
      </header>
    );
  }
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
}

ButtonNav.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
};

ButtonNav.defaultProps = {
  title: '',
  links: [],
};

export default ButtonNav;
