import { NextPage } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';

import css from './Home.module.scss';
import commonCss from '../common.module.scss';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import GridCols from '../../primitives/GridCols';
import GridItem from '../../primitives/GridCols/GridItem.view';
import Card from '../../primitives/Card/Card.view';

type HomePublicProps = {};

const Home: NextPage<HomePublicProps> = (
  _props: HomePublicProps,
) => {
  return (
    <MainLayout>
      <Box className={[css.hero, commonCss.contentWrapper]} flex-col flex-pri="end">
        <Box className={[commonCss.contentInner]} pv={1} flex-col flex-pri="end" flex-sec="start">
          <T anemic className={css._blurb}>
            <span className={css._technology}>Technology</span> should serve <span className={css._humans}>humans</span>
            <br />(not the other way around)
          </T>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <GridCols>
            <GridItem cols={[12, 8]} className={[commonCss.paragraphContent, 'formatted-content']}>
              <T content-feature mt={1}>
                With tech, we are often persuaded to keep clicking, scrolling, and sharing, whether we realise it or not.
              </T>
              <T content-feature mb={2}>
                But the content that keeps us most engaged is starting to affect our perspective on the world, and
                how we get along together.
              </T>
            </GridItem>
            <GridItem cols={[12, 4]}>
              <Box m={1 / 4}>
                <Card className={'formatted-content'}>
                  <T h5 no-margin>23 October 2020</T>
                  <T h4 no-margin mb={1 / 2}>Spark Festival Panel</T>
                  <T content-pragmatic>
                    Join us for our premiere panel discussion with:
                    <ul>
                      <li>Nir Eyal (Best-selling Author)</li>
                      <li>Fontaine Foxworth (Google)</li>
                      <li>Joseph Gentle (Prismatik)</li>
                    </ul>
                  </T>
                </Card>
              </Box>
            </GridItem>
          </GridCols>
          {/*<Box className={commonCss.indentedContented}>*/}
          {/*  <T content>*/}
          {/*    The biggest tech companies in the world profit by coaxing you into spending more time on their platform,*/}
          {/*    building a detailed profile of your personality and selling targeted advertising.  But signing over access*/}
          {/*    to your personal data and losing a few hours is only the start of the problem.*/}
          {/*  </T>*/}
          {/*  <T content>*/}
          {/*    The bigger issue is that the most effective way to win our attention is by feeding us divisive and often*/}
          {/*    misinformed content, with no regard to our mental health,*/}
          {/*    the loss of cohesion we feel as a society, or the viability of the rational public discourse necessary*/}
          {/*    for democracy.*/}
          {/*  </T>*/}
          {/*</Box>*/}
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper, commonCss.__col_dark, 'theme--inverse']}>
        <Box className={[commonCss.contentInner, commonCss.section, 'formatted-content']}>
          <T h2>Humane Technology</T>
          <T content-feature>We see the solution happening in three distinct areas</T>
          <GridCols>
            <GridItem cols={[12, 4]}>
              <T h1 tagName="p">1.</T>
              <T h3 tagName={"h4"}>Individual awareness</T>
              <T content>Raise community concern about the problem</T>
            </GridItem>
            <GridItem cols={[12, 4]}>
              <T h1 tagName="p">2.</T>
              <T h3 tagName={"h4"}>Government action</T>
              <T content>Put pressure on governments to act in our best interests</T>
            </GridItem>
            <GridItem cols={[12, 4]}>
              <T h1 tagName="p">3.</T>
              <T h3 tagName={"h4"}>Technology companies</T>
              <T content>Change through shifting internal culture and dialogue
                {/*, market forces and legislative pressures*/}
              </T>
            </GridItem>
          </GridCols>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h3 className={css.notchedHeading}>What we're about</T>
          <Box className={[commonCss.indentedContented, 'formatted-content']}>
            <T content>
              Humane Technology Australia supports the{' '}
              <a href="https://www.humanetech.com" target="_blank">Center for Humane Technology</a>'s mission
              to <strong>realign technology with humanity’s best interests</strong>.  We bring the ongoing global discussion on
              how technology is impacting society into an Australian context.
            </T>
            <T h4 mb={1 / 2}>Building awareness</T>
            <T content>
              The more people who understand the nature and severity of the issue, the more pressure there will be on technology platforms to operate in a way that respects individual users.
            </T>
            <T content>
              HTA brings together the best minds in the field to share insights and foster discussion amongst leaders and creators so that the people who are building the tools of today and tomorrow have an understanding of ethical best practices, and can share their own experiences.  We're also on the pulse of news and developments to share stories (subscribe or follow us for updates).
            </T>
            <T h4 mb={1 / 2}>Advocacy</T>
            <T content>
              Our goal is to ensure that policy decisions consider the well-being of Australian technology users, and preserve the integrity of public opinion by minimising artificial causes of polarisation.
            </T>
            <T content>
              To achieve this, we connect government with industry experts to encourage conversation and understanding so policy-makers have the support to make these well-informed decisions.
            </T>
          </Box>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper, commonCss.__col_contrast]}>
        <Box className={[commonCss.contentInner, commonCss.__textContent, commonCss.section]}>
          <T h3 className={css.notchedHeading}>Who we are</T>
          <Box className={[commonCss.indentedContented, 'formatted-content']}>
            <T content>
              We're just a handful of people who care about the survival of personal well-being and living in a thriving, cooperative society.
            </T>
            <T content>
              <strong>If you care about these things too</strong>, join our mailing list to keep
              up to date on what’s happening.
            </T>
            <T content>
              <strong>If you’d like to get involved</strong>, <Link to={ROUTE_PATHS.CONTACT}>contact us</Link> to see how you can help.
            </T>
            {/*<T content>*/}
            {/*  <Link to={ROUTE_PATHS.ROOT}>Meet the team</Link>*/}
            {/*</T>*/}
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
