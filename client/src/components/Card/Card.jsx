import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = () => {

    return (
        <div>
            <h2>Nombre</h2>
            <Link to={`/details/id`}>
                <img src="" alt="" />
            </Link>
            <p>Temperamento</p>
            <p>Peso</p>
        </div>
    )
}

export default Card