import React from 'react';

import noop from '../../../../utils/Functional/noop';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import Link from '../../primitives/Link';
import Box from '../../primitives/Box';

import css from './Nav.module.scss';

type StaticNavLinksProps = {
  closeMenu: typeof noop;
  isMobileSize: boolean;
};

const StaticNavLinks = ({ closeMenu, isMobileSize }: StaticNavLinksProps) => {
  return (
    <>
      <Box onClick={closeMenu} className={css['nav-link-ctnr']}>
        <Link
          to={ROUTE_PATHS.ROOT}
          className={css._link}
          activeClass={css['--active']}
        >
          What we're about
        </Link>
      </Box>
      <Box onClick={closeMenu} className={css['nav-link-ctnr']}>
        <Link
          to={ROUTE_PATHS.NEWS}
          className={css._link}
          activeClass={css['--active']}
        >
          News
        </Link>
      </Box>
      <Box onClick={closeMenu} className={css['nav-link-ctnr']}>
        <Link
          to={ROUTE_PATHS.CONTACT}
          className={css._link}
          activeClass={css['--active']}
        >
          Contact
        </Link>
      </Box>
    </>
  );
};

export default StaticNavLinks;
