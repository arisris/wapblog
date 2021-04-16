import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
export default function PageHome({ posts }) {
  return (
    <Layout withHero={{ title: "Hero Title", subtitle: "Hero Subtitle" }}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-7/12">
          <h3 className="border-l-4 border-purple-800 pl-2 text-2xl font-bold text-purple-800">
            Latest Posts
          </h3>
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="sm:w-5/12"><h3 className="border-l-4 border-purple-800 pl-2 text-2xl font-bold text-purple-800">
            Sidebar Widget
          </h3></div>
      </div>
      
    </Layout>
  );
}
export async function getStaticProps() {
  const { getAllPost } = await import("lib/posts");
  let posts = await getAllPost();
  posts = posts.map((post) => (delete post.content, post));
  return {
    props: {
      posts,
    },
  };
}
