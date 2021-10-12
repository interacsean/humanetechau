import { ArticleData } from '../../../../utils/NewsArticles/parseArticle';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';
import Link from '../../primitives/Link/Link.view';
import css from './Article.module.scss';

type ArticleProps = ArticleData;

const Article = (props: ArticleProps) => {
  return (
    <Box>
      {props.body ? (
        <T h3>
          <Link to={`/news/${props.slug}/${props.id}`}>
            <a dangerouslySetInnerHTML={{ __html: props.heading}} />
          </Link>
        </T>
      ) : (
        <T h3 dangerouslySetInnerHTML={{ __html: props.heading}}></T>
      )}
      <T content-caption>{props.date}</T>
      <Box className={css.bodyCtnr} dangerouslySetInnerHTML={{ __html:
          props.summary + (props.body || '')
      }} mt={1} />
    </Box>
  )
}

export default Article;
