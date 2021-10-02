import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to my Blog</h1>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

// SSR
// 페이지에 들어올 때마다 서버에 요청 후 데이터를 받아옴
// 서버에서 만든 html 파일을 제공

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     // `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
//     `http://localhost:8080/api/posts`
//   );
//   const posts = await res.json();
//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
    // http://localhost:8080/api/posts`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    // 20초 지난 시점부터 접속이 일어나면 파일을 새롭게 생성
    revalidate: 20,
  };
};
