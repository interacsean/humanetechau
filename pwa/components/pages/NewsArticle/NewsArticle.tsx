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
import css from './NewsArticle.module.scss';
import GridCols from '../../primitives/GridCols';
import getGDocContent from '../../../../utils/GDocContent/getGDocContent';
import splitArticles from '../../../../utils/NewsArticles/splitArticles';
import parseArticle, { ArticleData } from '../../../../utils/NewsArticles/parseArticle';

const DEFAULT_FORM = {
  name: '',
  email: '',
  message: '',
};

type NewsArticleProps = {
  article: ArticleData | null
}

const NewsArticle = (props: NewsArticleProps) => {
  return (
    <MainLayout >
      <Box className={[css.hero, commonCss.contentWrapper]} />
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h2 mb={2}>Humane Technology News</T>
          <Box dangerouslySetInnerHTML={{ __html:
            props.article?.body
          }} />
        </Box>
      </Box>
    </MainLayout>
  );
};

export const getStaticPaths = async ({ params }: GetStaticPropsContext) => {
  const content = await getGDocContent(
    'd/e/2PACX-1vSG1tIoAwnQAgeE58mE5qj37YJJ0Md3OhWHIt4qqCIyGw3hOF_SgWuONAn9gNZlQ8M2Y8a0-Mdr6F3z', css.contentCtnr)
  const articles = splitArticles(content);
    content?.split('---').map(x => x.split('&mdash;&mdash;&mdash;')).flat();
  const paths = articles.map(
    parseArticle
  ).map(
    article => ({
      params: {
      'article-slug': article.slug,
      'article-id': article.id,
    }})
  ).filter(path => path['article-slug'] && path['article-id']);

  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const content = await getGDocContent(
    'd/e/2PACX-1vSG1tIoAwnQAgeE58mE5qj37YJJ0Md3OhWHIt4qqCIyGw3hOF_SgWuONAn9gNZlQ8M2Y8a0-Mdr6F3z', css.contentCtnr)
  const articles = splitArticles(content);
  const article = articles.find(
    a => a.includes(`\`id:${params['article-id']}\``)
  )
  return {
    props: {
      article: article ? parseArticle(article) : null
    },
  };
};


export default NewsArticle;
