import style from './SearchBar.module.css';
import { useState } from 'react';
 
const Searchbar = () => {

    const [dog, setDog] = useState("")
    const handleChange = (event) => setDog(event.target.value);

    return (
        <div>
            <input type="search" onChange={handleChange}/>
            <button >🔎</button>
        </div>
    )
}

export default Searchbar;