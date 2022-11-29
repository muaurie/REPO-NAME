import logo from './logo.svg'
import './POPOSSpace.css
import { Link } from 'react-router-dom'

export default function POPOSSpace(props) {
  const spaces = data.map(({ title, address, images, hours, id } = props
    return (
      <POPOSSpace
        id={i}
        <h1>
          <Link to={`/details/${id}`}>
            {name}
          </Link>
          </h1>
        name={title}
        address={address}
        <Link to={`/details/${id}`}>
          <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
        hours={hours}
      />
    )
  })
