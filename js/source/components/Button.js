import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props: Object) => {
  const cssclasses = classNames('Button', props.className);
  return props.href ? (
    <a {...props} className={cssclasses} />
  ) : (
    <button {...props} className={cssclasses} />
  );
};
Button.propTypes = {
  href: PropTypes.string
};

export default Button;
