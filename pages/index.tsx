import Card from "@/components/elements/Card";
import Layout from "@/components/layouts/Main";
import type { NextPage } from "next";
import Head from "next/head";

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

      <div className="flex flex-wrap justify-center ">
        {products?.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            category={product.category}
            id={product.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const { data }: Awaited<{ data: IProducts }> = await api.get(
    ENDPOINTS.products,
  );

  // Run this script if products are updated in the future
  // await axios.post("http://localhost:3000/api/algolia", {
  //   data,
  // });

  return {
    props: {
      products: data ?? [],
    },
  };
};
