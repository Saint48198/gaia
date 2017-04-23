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
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className={s.container}>
          <Link className={s.brand} to="/"><span aria-label="gaia" /></Link>
        </div>
        <div className={s.nav}>
          <div className={s.container}>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default withStyles(s)(Header);
