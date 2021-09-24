import { articles } from '../../../data';

export default function handleArticles(req, res) {
  res.status(200).json(articles);
}
