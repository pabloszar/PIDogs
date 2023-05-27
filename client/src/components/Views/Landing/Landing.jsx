import style from './Landing.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {


    return (
        <div>
            <h1>Doggies</h1>
            <img src="https://imagendeperros.com/wp-content/uploads/2016/01/Fotos-Blanco-Y-Negro-De-Perros-Usando-Gafas.jpg" alt="Doggie" />
            <Link to="/home">
                <p>Go Home</p>
            </Link>
        </div>
    )
}

export default Landing;