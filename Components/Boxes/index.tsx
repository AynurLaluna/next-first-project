import React from 'react'
import BoxButton from '../BoxButton';

function Boxes() {

const boxes = [
    {id: 0, header: "Project Plan", text: "There are many variations of the passages of lorem Ipsum fromavailable, majority.", button: "Read More"},
    {id: 1, header: "Interior Work", text: "There are many variations of the passages of lorem Ipsum fromavailable, majority.", button: "Read More"},
    {id: 2, header: "Realization", text: "There are many variations of the passages of lorem Ipsum fromavailable, majority.", button: "Read More"}
]

  return (
    <div className='boxWrapper'>
        <div className='boxContainer'>
        {boxes.map(({ id, header, text, button }) => {
    return (
      <div className='box' key={id}>
        <h4>{header}</h4>
        <p>{text}</p>
        <BoxButton title="Read More" to="/"/>
      </div>
    );
})}
        </div>
    </div>
  )
}

export default Boxes;