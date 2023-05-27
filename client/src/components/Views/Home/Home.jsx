import style from './Home.module.css';
import Cards from '../../Cards/Cards';
import Searchbar from '../../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <Link to="/Form">
                <p>New Dog</p>
            </Link>
            <Searchbar/>
            <Cards/>
        </div>
    )
}

export default Home;