import React from 'react'

export const Propiedades = ({cadena,numero,booleano}) => {
  return (
    <>
            <div>Propiedades</div>
            <li>
                <ul>{cadena}</ul>
                <ul>{numero}</ul>
                <ul>{booleano}</ul>
            </li>

    </>
  )
}
