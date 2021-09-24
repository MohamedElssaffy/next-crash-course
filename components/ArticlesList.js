import ArticleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles }) => {
  return (
    <div className={ArticleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
