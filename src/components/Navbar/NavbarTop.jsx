import firstImg from "../../Img/img1.png"
import { CiLocationOn } from "react-icons/ci";
function NavbarTop() {
  return (
    <div>
      <div className="header">
        <div className="left">
          <CiLocationOn />
          <h5 className='h5'>Shahar:</h5>
          <a href="#" >Namangan</a>
          <a href="#" >Topshirish punktlari</a>
          <span>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</span>
        </div>
        <div className="right">
          <a href="#">Savol-javoblar</a>
          <a href="#">Buyurtmalarim</a>
          <a href="#" className="flag">
            <img src={firstImg} alt="" />
            <span>O'zbekcha</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavbarTop