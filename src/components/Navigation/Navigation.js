/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link className={s.link} to="/about">my gaia</Link>
        <Link className={s.link} to="/contact">yoga</Link>
        <Link className={s.link} to="/seeking-truth">seeking truth</Link>
        <Link className={s.link} to="/login">films &amp; docs</Link>
      </nav>
    );
  }
}

export default withStyles(s)(Navigation);
