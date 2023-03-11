import Layout from "@/components/layouts/Main";
import type { NextPage } from "next";
import Head from "next/head";
import { Firebase } from "~/base/helpers/firebase";
import { ENDPOINTS, api } from "~/base/lib/axios";
import IProducts from "../types/types";

type TProducts = {
  products?: IProducts[];
};

const Home: NextPage = ({ products }: TProducts) => {
  return (
    <Layout>
      <Head>
        <title>Home Page here</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products?.map((product) => (
        <div className="leading-snug" key={product.id}>
          {product.title}
        </div>
      ))}
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const fb = new Firebase();

  const books = await fb.getDocument();

  const { data }: Awaited<{ data: IProducts }> = await api.get(
    ENDPOINTS.products,
  );

  return {
    props: {
      books,
      products: data,
    },
  };
};
