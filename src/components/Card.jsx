import React from 'react'

const Card = (props) => {
  const {foto, nombre, email} = props;
  return (
    <div className="card m-3">
      <img src={foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">{email}</p>
      </div>
    </div>
  )
}

export default Card;
