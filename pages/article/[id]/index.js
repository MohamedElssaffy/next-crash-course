import React, { Fragment } from 'react';
import Link from 'next/link';
import { server } from '../../../config';
import Meta from '../../../components/Meta';

const article = ({ article }) => {
  return (
    <Fragment>
      <Meta title={article.title} description={article.excerpt} />
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Home</Link>
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/articles`);

  const articles = await res.json();

  const ids = articles.map((a) => a.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=7`
//   );

//   const articles = await res.json();

//   const ids = articles.map((a) => a.id);

//   const paths = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
