import Head from "next/head";
import Layout from "@/components/Layout";
export default function PageHome(props) {
  return (
    <Layout withHero={{title: "Hi", subtitle: "Sub"}}>
      <Head>
        <title>Home Page</title>
      </Head>
      <h3>Hello World</h3>
    </Layout>
  );
}
