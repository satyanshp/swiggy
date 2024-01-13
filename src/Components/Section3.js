import React, {useState} from 'react'
import Layout from './Layout'
import './Styles/section3.css';
import Card from './Card';
import { itemArray } from './Section2';

const Section3 = () => {
    const filterArr = [
        "Filter",
        "Sort By",
        "Fast Delivery",
        "New on Swiggy",
        "Rating 4.0+",
        "Pure Veg",
        "Offers",
        "Rs. 300-Rs. 600",
        "Less than 300",
    ]
const [selected, setSelected] = useState(null)
  return (
    <div className='infinite_scroll'>
        <Layout header={'Restaurants with online food delivery in Delhi'} arrow={false}>
            <section className='filters'>
                {
                    filterArr.map((item,index)=>(
                        <div key={`filter-${index}`} className={`${selected===index&&'selected'} filter_tags`} onClick={()=>setSelected(index)}>
                            <p>{item}</p>
                            {index === 0 && <svg width="16" height="17" viewBox="0 0 16 17" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.3996 5.99897C13.3996 6.66172 12.8623 7.19897 12.1996 7.19897C11.5368 7.19897 10.9996 6.66172 10.9996 5.99897C10.9996 5.33623 11.5368 4.79897 12.1996 4.79897C12.8623 4.79897 13.3996 5.33623 13.3996 5.99897ZM14.9996 5.99897C14.9996 7.54537 13.746 8.79897 12.1996 8.79897C10.9311 8.79897 9.85962 7.95547 9.51546 6.79878L1.80875 6.79878C1.36692 6.79878 1.00875 6.44061 1.00875 5.99878C1.00875 5.55695 1.36692 5.19878 1.80875 5.19878L9.51558 5.19878C9.85986 4.04228 10.9312 3.19897 12.1996 3.19897C13.746 3.19897 14.9996 4.45258 14.9996 5.99897ZM3.8 13.4527C3.13726 13.4527 2.6 12.9154 2.6 12.2527C2.6 11.59 3.13726 11.0527 3.8 11.0527C4.46274 11.0527 5 11.59 5 12.2527C5 12.9154 4.46274 13.4527 3.8 13.4527ZM3.8 15.0527C2.2536 15.0527 1 13.7991 1 12.2527C1 10.7063 2.2536 9.45271 3.8 9.45271C5.0683 9.45271 6.13964 10.296 6.48396 11.4524H14.1953C14.6372 11.4524 14.9953 11.8106 14.9953 12.2524C14.9953 12.6942 14.6372 13.0524 14.1953 13.0524H6.48414C6.14001 14.2092 5.06852 15.0527 3.8 15.0527Z" fill="rgba(2, 6, 12, 0.92)" fill-opacity="0.92"></path></svg>}
                            {index === 1 && <svg width="12" height="13" viewBox="0 0 12 13" fill="none" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.75)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.30875 4.27703C0.931854 4.60108 0.889014 5.16932 1.21307 5.54622L4.57534 9.45679C4.58439 9.46731 4.59351 9.47793 4.6027 9.48863C4.75431 9.66514 4.92366 9.86231 5.08944 10.0078C5.28433 10.1788 5.5905 10.385 6.01603 10.385C6.44156 10.385 6.74773 10.1788 6.94262 10.0078C7.1084 9.86232 7.27776 9.66515 7.42937 9.48865C7.43856 9.47795 7.44768 9.46733 7.45673 9.4568L10.7864 5.58418C11.1105 5.20729 11.0677 4.63905 10.6908 4.31499C10.3139 3.99093 9.74563 4.03377 9.42157 4.41066L6.09187 8.28328C6.06476 8.3148 6.0396 8.34406 6.01604 8.37135C5.99247 8.34406 5.96732 8.3148 5.94021 8.28328L2.57794 4.37271C2.25389 3.99581 1.68565 3.95297 1.30875 4.27703Z" fill="rgba(2, 6, 12, 0.75)" fill-opacity="0.92"></path></svg>}
                        </div>
                    ))
                }
            </section>
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