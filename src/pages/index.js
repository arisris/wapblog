import Head from "next/head";
import Layout from "@/components/Layout";
import { useStoreon } from "storeon/react";

export default function PageHome(props) {
  const {count, dispatch} = useStoreon("count");
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h3>Hello: {count}</h3>
      <button onClick={() => dispatch("count/increment")}>INCREMENT</button>
      <button onClick={() => dispatch("count/decrement")}>DECREMNET</button>
    </Layout>
  );
}
