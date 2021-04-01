import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/FontawesomeIcons";
import CollectionProducts from "../components/CollectionProduct/CollectionProducts";
import NewProducts from "../components/NewProduct/NewProducts";
import HotDeal from "../components/HotDeal";
import TopSellings from "../components/TopSelling/TopSellings";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>HOME | NEXT REALWORLD</title>
        <meta name="awesome product" content="We are product of our site" />
      </Head>
      <CollectionProducts />
      <NewProducts />
      <HotDeal />
      <NewProducts />
      <TopSellings />
      <h1>Hello codding challenge</h1>
    </>
  );
};

export default Index;
