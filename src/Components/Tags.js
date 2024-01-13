import React from 'react'
import './Styles/tags.css';

const Tags = ({header, array}) => {
  return(
    <section className='tags'>
        <h2>{header?header:"Header"}</h2>
        <div class="tags_container">
            {
                array?.map((item,index)=>(
                    <div key={`tag-item-${index}`} className={`${array.length===2&&'tag_grow'} tag_item`}>
                       <p>{item}</p> 
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Tags