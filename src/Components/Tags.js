import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './Styles/tags.css';

const Tags = ({header, array}) => {
  const [hidden, setHidden] = useState(11);
  return(
    <section className='tags'>
        <h2>{header?header:"Header"}</h2>
        <div class="tags_container">
            {
                array?.slice(0,hidden).map((item,index)=>(
                    <div key={`tag-item-${index}`} className={`${array.length===2&&'tag_grow'} tag_item`}>
                       <p>{item}</p> 
                    </div>
                ))
            }
            {array.length>hidden+1&&
              <div className={`${array.length===2&&'tag_grow'} tag_item`} onClick={()=>setHidden(array.length)}><p style={{fontWeight:'600'}}>Show More</p><Icon
              icon="iconamoon:arrow-down-2-light"
              fontSize={20}
            /> </div>
            }
        </div>
    </section>
  )
}

export default Tags