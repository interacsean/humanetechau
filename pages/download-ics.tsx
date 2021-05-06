import React from 'react';
import openIcs from '../pwa/components/pages/Home/utils/createIcs';
import MainLayout from '../pwa/components/layouts/MainLayout';
import T from '../pwa/components/primitives/Typo';
import Box from '../pwa/components/primitives/Box';

export default function () {
  React.useLayoutEffect(
    () => {
      if (typeof document !== 'undefined') {
        openIcs();
      }
    },
    [],
  );

  return (
    <MainLayout hideHero>
      <Box flex-center flex-col style={{ minHeight: '50vh'}}>
        <T h5>Downloading your link</T>
        <T content-caption mt={1}>If your file does not download automatically, <a href="#" onClick={openIcs}>click here</a></T>
      </Box>
    </MainLayout>
  )
}