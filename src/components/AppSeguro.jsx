import { useCotizador } from "../hooks/useCotizador"
import { Formulario } from "./Formulario"
import { Resultado } from "./Resultado"
import { Spiner } from "./Spiner"

export const AppSeguro = () => {

  const { cargando } = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10 mb-5">
            <Formulario />

            { cargando ? <Spiner /> : <Resultado /> }
        </main>
    </>
  )
}
