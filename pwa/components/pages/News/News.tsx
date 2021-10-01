import { GetStaticPropsContext, NextPage } from 'next';
import React, { FormEvent } from 'react';
import fetch from 'cross-fetch';
import { Nullable } from 'errable';

import { serialize } from '../../../../utils/Data/serialize/serialize';
import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';
import InputLabel from '../../layouts/InputLabel';
import Input from '../../primitives/Input/Input.view';
import Button from '../../primitives/Button';

import commonCss from '../common.module.scss';
import css from './News.module.scss';
import GridCols from '../../primitives/GridCols';
import getGDocContent from '../../../../utils/GDocContent/getGDocContent';
import splitArticles from '../../../../utils/NewsArticles/splitArticles';
import parseArticle, { Article } from '../../../../utils/NewsArticles/parseArticle';
import Link from '../../primitives/Link/Link.view';

const DEFAULT_FORM = {
  name: '',
  email: '',
  message: '',
};

type NewsProps = {
  articles: Article[] | null
}

const News = (props: NewsProps) => {

  return (
    <MainLayout >
      <Box className={[css.hero, commonCss.contentWrapper]} />
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h2 mb={2}>Humane Technology News</T>
          {props.articles?.map(
            article => (
              <Box key={article.id}>
                <>
                  <T h3>
                    <Link to={`/news/${article.slug}/${article.id}`}>
                      <a>{article.heading}</a>
                    </Link>
                  </T>
                  <Box dangerouslySetInnerHTML={{ __html:
                    article.body
                  }} />
                </>
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
  const articles = articlesRaw.map(parseArticle);
  return {
    props: {
      articles
    },
  };
};


export default News;
