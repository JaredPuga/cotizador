import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Una base
        let resultado = 2000

        //Obtener una diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)

        //Restar 3% por cada year
        resultado -= ((diferencia * 3) * resultado) / 100

        resultado *= calcularMarca(datos.marca)

        resultado *= calcularPlan(datos.plan)

        resultado = formatearDinero(resultado)

        setResultado(resultado)
    }

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext