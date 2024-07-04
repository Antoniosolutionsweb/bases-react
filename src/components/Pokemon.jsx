import React from 'react'

export const Pokemon = ({name, avatar}) => {
  return (
    <div>

         <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    </div>
  )
}
