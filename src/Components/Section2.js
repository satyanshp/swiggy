import React from 'react'
import Layout from './Layout'
import Card from './Card'
import './Styles/section2.css'

export const itemArray = [ 
    {
        name:'Burger King',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'Burger, American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/533d5ee221cb729dcf42faeb8761f57d',
        time: '31',
    },
    {
        name:'Domino\'s Pizza',
        rating:'4.1',
        location: 'Connaught Place',
        type: 'Pizzas',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdl4tnyc8wbvysqxzhnq',
        time: '35',
    },
    {
        name:'McDonald\'s',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720',
        time: '30',
    },
    {
        name:'Burger King',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'Burger, American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/533d5ee221cb729dcf42faeb8761f57d',
        time: '31',
    },
    {
        name:'Domino\'s Pizza',
        rating:'4.1',
        location: 'Connaught Place',
        type: 'Pizzas',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdl4tnyc8wbvysqxzhnq',
        time: '35',
    },
    {
        name:'McDonald\'s',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720',
        time: '30',
    },
    {
        name:'Burger King',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'Burger, American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/533d5ee221cb729dcf42faeb8761f57d',
        time: '31',
    },
    {
        name:'Domino\'s Pizza',
        rating:'4.1',
        location: 'Connaught Place',
        type: 'Pizzas',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdl4tnyc8wbvysqxzhnq',
        time: '35',
    },
    {
        name:'McDonald\'s',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720',
        time: '30',
    },
    {
        name:'Burger King',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'Burger, American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/533d5ee221cb729dcf42faeb8761f57d',
        time: '31',
    },
    {
        name:'Domino\'s Pizza',
        rating:'4.1',
        location: 'Connaught Place',
        type: 'Pizzas',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mdl4tnyc8wbvysqxzhnq',
        time: '35',
    },
    {
        name:'McDonald\'s',
        rating:'4.3',
        location: 'Connaught Place',
        type: 'American',
        deal: '₹120 OFF ABOVE ₹199 ',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720',
        time: '30',
    },
]

const Section2 = () => {
  return (
    <div>
        <Layout
            header={'Top restaurant chains in Delhi'}
            arrow
        >
           <div className='overflow_container card_container'>
                {
                    itemArray.map((item,index)=>(
                        <div key={`food-item-${index}`} className='card_item'><Card item={item}/></div>
                    ))
                }
            </div> 
        </Layout>
    </div>
  )
}

export default Section2