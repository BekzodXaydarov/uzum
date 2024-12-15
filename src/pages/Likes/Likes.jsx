import "./Likes.css"
import heart from "../../Img/heart.webp"



function Likes() {
  return (
    <div className='likes'>
      <img src={heart} alt="" />
      <h2>Sizga yoqqanini qoʻshing</h2>
      <p>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
      <button><a href="">Akkauntga kirish</a></button>
    </div>
  )
}

export default Likes