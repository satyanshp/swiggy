import React from 'react'
import Layout from './Layout'
import './Styles/section3.css';
import Card from './Card';
import { itemArray } from './Section2';
import Filters from './Filters';

const Section3 = () => {
  return (
    <div className='infinite_scroll'>
        <Layout header={'Restaurants with online food delivery in Delhi'} arrow={false}>
            <Filters nav={false}/>
            <section className='infinite_cards'>
                {
                    itemArray.map((item,index) => (
                        <div key={index} className='infinite_card_item'><Card item={item} width={'100%'} /></div>
                    ))
                }
            </section>
        </Layout>
    </div>
  )
}

export default Section3