import React, { useCallback, useMemo, useRef } from 'react'
import { MARCAS, PLANES } from '../constants'
import { useCotizador } from '../hooks/useCotizador'


export const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos
    const yearRef = useRef(year)

    const [nombreMarca] = useCallback( //UseCallback se puede usar
            MARCAS.filter(m => m.id === Number(marca)), [resultado] //Hasta que cambie resultado, nombreMarca hará en ReRender
    ) 
    const [nPlan] = useMemo( () =>  //Pero tambien se puede usar useMemo, tienen la misma funcionalidad
            PLANES.filter(p => p.id === Number(plan)), [resultado]
    )


  
    if (resultado === 0) return null

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>
            Resumen
        </h2>

        <p className='my-2'>
            <span className='font-bold'>Marca: </span>
            { nombreMarca.nombre }
        </p>
        <p className='my-2'>
            <span className='font-bold'>Plan: </span>
            { nPlan.nombre }
        </p>
        <p className='my-2'>
            <span className='font-bold'>Año del auto: </span>
            { yearRef.current }
        </p>
        <p className='my-2 text-2xl'>
            <span className='font-bold'>Total cotización: </span>
            { resultado }
        </p>
    </div>
  )
}
