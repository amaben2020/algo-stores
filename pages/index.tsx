import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { Firebase } from "~/base/helpers/firebase";
import { IProducts } from "./types";

type TProducts = {
  products?: IProducts[];
};
const Home: NextPage = ({ products }: TProducts) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products?.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const fb = new Firebase();

  const books = await fb.getDocument();

  const { data }: Awaited<{ data: IProducts }> = await axios.get(
    "https://fakestoreapi.com/products",
  );

  return {
    props: {
      books,
      products: data,
    },
  };
};
