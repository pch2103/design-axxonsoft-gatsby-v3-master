import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="google-site-verification" content="4NAQzoSn5S6s2KDWW6BgV9NASkAn5RPrwJeKPx6XZr0" />
      </Helmet>
        {props.children}
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
