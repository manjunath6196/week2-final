import React from 'react';
import FoodItems from '../../components/restarent-items/restarent-items.component';

class Bangalore extends React.Component {
    constructor(){
        super();
        this.state = {
            sections:[
{
    id: 1,
    name: ' Beer and Nachos',
    imageUrl: 'https://i.ndtvimg.com/i/2017-03/nachos_620x350_61488366718.jpg',
    price: 135
  },
  {
    id: 2,
    name: 'Benne Masala Dosa',
    imageUrl: 'https://i.ndtvimg.com/i/2017-03/dosa_620x350_61488363369.jpg',
    price: 90
  },
  {
    id: 3,
    name: 'Char Siu Bao',
    imageUrl: 'https://i.ndtvimg.com/i/2017-03/bao_620x350_81488363981.jpg',
    price: 100
  },
  {
    id: 4,
    name: 'Pasta ',
    imageUrl: 'https://i.ndtvimg.com/i/2016-06/pasta-625_625x350_71466417864.jpg',
    price: 175
  },
  {
    id: 5,
    name: 'Mysore Pak',
    imageUrl: 'https://i.ndtvimg.com/i/2016-10/mysore-pak_620x350_81477299288.jpg',
    price: 150
  },
]
};
}

render() {
  return (
    <div className='bangalorerestarent'>
      {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <RestarentItems key={id} {...otherSectionProps} />
      ))}
    </div>
  );
}
}

export default Bangalore;