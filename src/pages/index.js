import Head from "next/head";
import Layout from "@/components/Layout";
import {SignUp} from "@/components/Auth";

export default function PageHome(props) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h3>Hello World</h3>
      <hr />
      <SignUp />
    </Layout>
  );
}
