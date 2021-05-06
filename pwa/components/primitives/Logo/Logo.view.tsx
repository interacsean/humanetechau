import React, { FC, ReactElement } from 'react';

import { LogoProps } from './Logo.props';
import T from '../Typo';

import css from './Logo.module.scss';
import Box from '../Box';

const LogoView: FC<LogoProps> = (_props: LogoProps): ReactElement<'div'> => {
  return (
    <Box className={[css.logoCtnr]} flex-sec="stretch">
      <Box className={css.logoImgCtnr} flex-center>
        <img src="/images/HTAx2.png" alt="HTA logo" width={40} />
      </Box>
      <Box flex-col flex-pri="space-between" ml={1 / 3}>
        <T tagName="h3" className={css.text}>
          Humane Technology
        </T>
        <T tagName={"span"} className={css.subline}>Australia</T>
      </Box>
    </Box>
  );
};

export default React.memo(LogoView);
