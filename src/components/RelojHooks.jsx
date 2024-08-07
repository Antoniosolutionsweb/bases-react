import React, { useEffect, useState } from 'react'
import { Reloj } from './Reloj'

export const RelojHooks = () => {

    const [hora, setHora] = useState(new Date().toLocaleTimeString())

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        let temporizador;

        if(visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString())
            },1000)
        }else{
            clearInterval(temporizador)
        }
        return ()=>{
            // console.log("fase de desmontaje")
            clearInterval(temporizador)
        }
    
    }, [visible])
    

    
  return (
    <div>

        <h2>Reloj con hooks</h2>

        {visible && <Reloj hora={hora}/>}

        <button onClick={()=>setVisible(true)}>Iniciar</button>
        <button onClick={()=>setVisible(false)}>Detener</button>
    </div>
  )
}
