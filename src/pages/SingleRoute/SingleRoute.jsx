import "./SingleRoute.css"
import { useParams } from 'react-router-dom'
import DATA from '../../mock';

const SingleRoute = () => {
  const params = useParams();
  console.log(params);
  const item = DATA.find((el) => el.id == params.id);

  return (
    <div className="container">
      <div className='single-rout'>
        <img className='single-img' src={item.url} alt="" />
        <div className="single-text">
          <h2>{item.title}</h2>
          <h6>{item.price}</h6>
        </div>
      </div>
    </div>
  )
}

export default SingleRoute
