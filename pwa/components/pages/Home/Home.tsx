import { NextPage } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T, { P } from '../../primitives/Typo';

import css from './Home.module.scss';
import commonCss from '../common.module.scss';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import Hr from '../../primitives/Hr';
import BodySegment from '../../layouts/BodySegment';
import openIcs, {
  nextMeetupDate,
  nextMeetupDesc,
  nextMeetupGCalLink,
  nextMeetupLink,
  nextMeetupTitle,
} from './utils/createIcs';

type HomePublicProps = {};


const Home: NextPage<HomePublicProps> = (
  _props: HomePublicProps,
) => {
  return (
    <MainLayout hideHero>
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

          <Hr stumpy />
          <T className={['align-center', css.intro]} content-feature mv={3}>
            Humane Technology Australia supports the <a href="https://humanetech.com" target="_blank">Center for Humane Technology's</a>{' '}
            mission to <strong>realign technology with humanity’s best interests</strong>.  We bring the ongoing global discussion on how technology
            is impacting society into an Australian context.
          </T>
          <Hr stumpy />

          { /* note: this Box makes the BodySegment component not break the classNames on static render */ }
          <Box mt={4}>
            <BodySegment heading="What we're about" className="formatted-content" bodyFormatted>
              <P>
                With technology, we are often persuaded to keep clicking, scrolling, and sharing, whether we realise it or not.
              </P>
              <P>
                But the posts and articles that keep us most engaged are affecting our perspective on the world, and how we all get along.
              </P>
              <P>
                We need to fix that.
              </P>
            </BodySegment>
          </Box>

          <T h5 mt={4} mb={1 / 2}>Join our monthly discussions</T>
          <Box tagName="a" className={['link-raw', css.promoBanner, 'formatted-content']} target="_blank">
            <T content-pragmatic no-margin style={{ maxWidth: '70ch' }} mb={1}>
              We host discussion groups to explore how technology is impacting society and personal well-being,
              through guest speakers and open conversation.
            </T>
            <T content-pragmatic mb={1}>
              Meetings are held on the 2nd or 3rd Wednesday of each month.
            </T>
            <Box flex-sec="start" style={{ maxWidth: '70ch' }}>
              <div dangerouslySetInnerHTML={{ __html: `
                <table style="width: 4.5em; border:2px solid #08121a; box-shadow: 2px 2px 3px 0 #00000033">
                  <thead>
                    <tr>
                      <th align="center" style="color: #fff; padding: 0em 0.3em; background-color: #08121a;">${nextMeetupDate[2]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="padding: 0.3em 0.3em 0.5em; background-color: white;" align="center">
                        <span style="text-align: center; font-weight: bolder; font-size: 80%; line-height:100%; margin:0">${nextMeetupDate[0]}</span><br/>
                        <span style="text-align: center; font-size: 200%; line-height:100%; margin:0">${nextMeetupDate[1]}</span><br/><span style="text-align: center; font-size: 70%; line-height:100%; margin:0">${nextMeetupDate[3]}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              `}} />
              <Box ml={1}>
                <T mb={1 / 3} content-caption>Next meeting</T>

                <T h5 mv={1 / 3}>
                  {nextMeetupTitle}
                </T>
                {
                  nextMeetupDesc && (
                    <T mv={1 / 3}>
                      {nextMeetupDesc}
                    </T>
                  )
                }
                <T content-pragmatic>Ways to join:</T>
                <T content-pragmatic><a href={nextMeetupLink} target="_blank">RSVP on Meetup</a>
                 <span className={css.textSpacer}> | </span><a href={nextMeetupGCalLink} target="_blank">Add to Google Calendar</a>
                 <span className={css.textSpacer}> | </span><a onClick={openIcs} target="_blank">Add to Outlook / iCal</a> </T>
              </Box>
            </Box>
          </Box>
        </Box>

      </Box>

      <Box className={[commonCss.contentWrapper, commonCss.__col_contrast]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>

          <BodySegment heading="What we do" className="formatted-content" bodyFormatted>
            <P>
              To solve any problem, we must first start with discussion to understand different perspectives
              and offer fresh ideas. HTA is dedicated to creating constructive conversations, not adversarial
              debates. We understand the value of listening to different perspectives, and not talking to
              'be right' or impress others.
            </P>
            <P>We have three streams of activity:</P>
            <T h4>1. Educating the public</T>
            <P>
              The more people who understand the nature and severity of the attention economy, the better we will be able to manage our relationship with technology.
            </P>
            <P>
              The issues are complex and at times can be technical, which is why it's vital there are straight-forward resources and open discussion opportunities available to help make better sense of things.
            </P>
            <T h4>2. Empowering technologists</T>
            <P>
              Technology companies are made up of employees, each of whom live in the world that is being reshaped by technology.  By educating those who are building technology in the outcomes of ethical design research, we can start an informed conversation.
            </P>
            <P>
              When technologists are empowered to voice their values and concerns not only as an employee but as a member of the community, the company's products, strategy and internal culture can be guided more holistically.
            </P>
            <T h4>3. Cultivating conversation</T>
            <P>
              Technology and policy have traditionally been developed at arm's length.  HTA believes a better reciprocal understanding between legislators, technology leaders, sociologists and psychologists will help work towards a shared bigger picture.
            </P>
            <P>
              We do this by bringing together the best minds from a variety of fields to share insights and foster discussion through roundtables and think tank events.
            </P>
          </BodySegment>
        </Box>
      </Box>

      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <BodySegment heading="Who we are" className="formatted-content" bodyFormatted>
            <P>
              We’re just a handful of people who believe that in order to live in a thriving, cooperative society,
              we need to re-examine our relationship with technology.
            </P>
            <P>
              <strong>If you care about these things too</strong>, <a href='#mailinglist'>join our mailing</a> list to keep
              up to date on what’s happening.
            </P>
            <P>
              <strong>If you’d like to get involved</strong>, <Link to={ROUTE_PATHS.CONTACT}>contact us</Link> to see how you can help.
            </P>
          </BodySegment>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
