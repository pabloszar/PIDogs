import styles from './Cards.module.css';
import Card from '../Card/Card';

const Cards = () => {


  return (
    <div>

    <Card/>

    {/* {dogs.map(dog => {
      return (
        <Card
        id={dog.id}
        name={dog.name}
        species={dog.species}
        gender={dog.gender}
        image={dog.image}
        onClose={onClose}
        />
      );
    })
    } */}
    </div>
  )
}

export default Cards;