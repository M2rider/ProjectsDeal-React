import React from 'react'

function Features(props) {
  return (
    <div>
      {/* "./assets/block.png"*/ }
        <img src={props.img} className='feature-img'></img>
        <h4>{props.title}</h4>
        <p className='feature-content'>{props.content}</p>
    </div>
  )
}

export default Features