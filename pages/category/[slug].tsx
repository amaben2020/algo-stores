import ImageComponent from "@/components/elements/Image/ImageComponent";
import Layout from "@/components/layouts/Page";
import { GetServerSidePropsContext } from "next";
import { ENDPOINTS, api } from "~/base/lib/axios";
import IProducts from "~/types/types";

const Category = ({
  products,
  type,
}: {
  products: IProducts[];
  type: string;
}) => {
  return (
    <Layout>
      <h1 className="text-xl">
        {type.split("")[0].toUpperCase() + type.substring(1)} Category
      </h1>
      {products.map((product) => (
        <div key={product.id} className="flex p-6 my-6 border rounded">
          <div className="w-1/3">
            <ImageComponent
              title={product.title}
              image={product.image}
              width={300}
              height={300}
            />
          </div>
          <div className="ml-4 space-y-3">
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
          </div>
        </div>
      ))}
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
      type: params?.slug,
    },
  };
};
