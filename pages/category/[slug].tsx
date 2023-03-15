import Layout from "@/components/layouts/Page";
import { GetServerSidePropsContext } from "next";
import { ENDPOINTS, api } from "~/base/lib/axios";
import IProducts from "~/types/types";

const Category = ({ products }: { products: IProducts[] }) => {
  return (
    <Layout>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Category;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { data } = await api.get(ENDPOINTS.products);

  const { params } = ctx;

  const filteredProduct = data.filter((product: IProducts) =>
    product.category.includes(params?.slug as string),
  );

  return {
    props: {
      products: filteredProduct,
    },
  };
};
