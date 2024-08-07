import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const HooksPeronalizados = () => {

    let url = "https://pokeapi.co/api/v2/pokemon/";
 
 
    let { data, isPending, error } = useFetch(url);
  return (
            <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
            <mark>{JSON.stringify(error)}</mark>
            </h3>
            <pre style={{ whiteSpace: "pre-wrap" }}>
            <code style={{ wordBreak: "break-word" }}>{JSON.stringify(data)}</code>
            </pre>
        </>
  )
}
