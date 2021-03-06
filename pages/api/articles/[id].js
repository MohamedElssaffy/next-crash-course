import { articles } from '../../../data';

export default function handleArticles({ query: { id } }, res) {
  const article = articles.find((article) => article.id === id);

  if (article) {
    res.status(200).json(article);
  } else {
    res.status(404).json({ message: `No article found with id = ${id}` });
  }
}
