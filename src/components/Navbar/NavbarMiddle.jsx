import navbarLogo from "../../Img/img2.png"
import { TbCategory } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function NavbarMiddle() {
  const cart = useSelector((state)=>state.cart)
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navbar-wrapper">
          <Link to={"/"} className='navbar-logo-link' href="">
            <img className='navbar-logo' src={navbarLogo} alt="" />
          </Link>
          <button className='navbar-category-btn'><TbCategory />
            <span>Katalog</span>
          </button>

          <div className='navbar-search'>
            <input type="text" placeholder='Mahsulot va turkumlarini izlash' />
            <button>
              <CiSearch />
            </button>
          </div>

          <div className="navbar-collection">
            <Link className='navbar-collection-item' href="">
              <CiUser />
              <Link className='link' to={"kirish"}>  <span>Kirish</span></Link>
            </Link>

            <Link className='navbar-collection-tim' href="">
              <CiHeart />
              <Link className='link' to={"likes"}>  <span>Saralangan</span></Link>
            </Link>

            <Link className='navbar-collection-tim' to={"savat"}>
              <SlBasket />
              <span>Savat</span>
              <p>{cart.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarMiddle