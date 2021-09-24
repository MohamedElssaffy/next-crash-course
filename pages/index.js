import { server } from '../config/index';
import ArticlesList from '../components/ArticlesList';

export default function Home({ articles }) {
  return (
    <div>
      <ArticlesList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_limit=7'
//   );

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };