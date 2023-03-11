import type { NextPage } from "next";
import Head from "next/head";
import { Firebase } from "~/base/helpers/firebase";

const Home: NextPage = ({ books }: any) => {
  console.log("BOOKS", books);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {books?.year}
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const fb = new Firebase();

  const books = await fb.getDocument();

  return {
    props: {
      books,
    },
  };
};
