import style from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div>
            <Link to="/home" className={style.title} >
            <h1 className={style.texto}>Doggies</h1>
            </Link>
        </div>
    )
}

export default Nav;