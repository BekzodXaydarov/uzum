import "./Savat.css"
import savat from "../../Img/savat.jfif"
import { useDispatch, useSelector } from "react-redux"
import { counter, deleteProduct } from "../redux/cartSlice"

function Savat() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  return (
    <>
      {
        cart.length == 0 ? <div className='likes'>
          <img src={savat} alt="" />
          <h2>Savatingiz hozircha bo‘sh</h2>
          <p>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
          <button className='sv'><a href=""></a>Bosh sahifa</button>
        </div> : <div className="cart">
          {
            cart?.map((item) => {
              return <div key={item.id} className="cart-product">
                <div className="cart-product-info">
                  <img src={item.url[0]} alt={item.url[0]} />
                  <h2>{item.title}</h2>
                  <p>{Math.floor((item.price / 12) * 1.5) * item.count} som / oyiga</p>
                  <div className="count">
                    <button onClick={() => dispatch(counter({ ...item, type: "+" }))}>+</button>
                    <p>{item.count}</p>
                    <button onClick={() => dispatch(counter({ ...item, type: "-" }))}>-</button>
                  </div>
                </div>
                <div className="cart-product-action">
                  <button onClick={() => dispatch(deleteProduct(item.id))}>O`chirish</button>
                </div>
              </div>
            })
          }
        </div>
      }
    </>
  )
}

export default Savat