import { Link } from 'react-router-dom';
import DATA from '../../mock';
import "./Product.css";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../pages/redux/cartSlice';

const Product = () => {
  const dispatch = useDispatch()
  return (
    <div className="product">
      <div className="container">
        <h2 className="product-title">Mashxur</h2>
        <div className="product-wrapper">
          {DATA.map((item, index) => {
            return (
              <div key={index} className="card">
                <Link to={`/product/${item.id}`}>
                  <div className="card-image">
                    <img src={item.url[0]} alt="" />
                  </div>
                </Link>
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <mark>{Math.floor((item.price / 12) * 1.5)} som / oyiga</mark>
                  <div className="card-price">
                    <div className="card-price-item">
                      <del>{item.price * 1.2}</del>
                      <h3>{item.price}</h3>
                    </div>
                    <button className="card-btn-basket" onClick={()=>dispatch(addProduct(item))}>
                      <SlBasket />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
