import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/FontawesomeIcons";
import CollectionProducts from '../components/CollectionProduct/CollectionProducts';
import NewProducts from '../components/NewProduct/NewProducts';
import HotDeal from '../components/HotDeal';
import TopSellings from '../components/TopSelling/TopSellings';


const Index = () => {
    return (
        <Layout>
            <CollectionProducts/>
            <NewProducts/>
            <HotDeal/>
            <NewProducts/>
            <TopSellings/>
            <h1>Hello codding challenge</h1>
        </Layout>
    );
};

export default Index;