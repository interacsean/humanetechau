import { GetStaticPropsContext } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';

import commonCss from '../common.module.scss';
import css from './News.module.scss';
import Article from '../../modules/Article';
import getGDocContent from '../../../../utils/GDocContent/getGDocContent';
import splitArticles from '../../../../utils/NewsArticles/splitArticles';
import parseArticle, { ArticleData } from '../../../../utils/NewsArticles/parseArticle';

type NewsProps = {
  articles: ArticleData[] | null
}

const News = (props: NewsProps) => {

  return (
    <MainLayout >
      <Box className={[css.hero, commonCss.contentWrapper]} />
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h2 mb={2}>Humane Technology Australia News</T>
          {props.articles?.map(
            article => (
              <Box key={article.id} mb={2}>
                <Article {...article} />
              </Box>
          ) || null)}
        </Box>
      </Box>
    </MainLayout>
  );
};


export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const content = await getGDocContent(
    'd/e/2PACX-1vSG1tIoAwnQAgeE58mE5qj37YJJ0Md3OhWHIt4qqCIyGw3hOF_SgWuONAn9gNZlQ8M2Y8a0-Mdr6F3z', css.contentCtnr)
  const articlesRaw = splitArticles(content);
  const articles = articlesRaw.map(parseArticle)
    .filter(x => !!x.id && !!x.heading);
  return {
    props: {
      articles
    },
  };
};


export default News;
