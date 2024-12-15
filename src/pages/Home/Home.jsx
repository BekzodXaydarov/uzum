import "./Home.css"
import Product from '../../components/Product/Product';
import Banner from '../../components/Banner/Banner';

function Home({ data }) {
  return (
    <div>
      <Banner />
      <Product />
    </div>
  );
};

export default Home;