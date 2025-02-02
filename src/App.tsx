import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import TipPercentageForm from "./components/TipPercentageForm"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import { useReducer } from "react"
import { initialState, OrderReducer } from "./reducers/order-reducer"

function App() {

  // xx second step: Agregar la función al useReducers???
  const [state, dispatch] = useReducer(OrderReducer, initialState)

  return (
    <>
      <header className="bg-orange-500 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl max-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {state.order.length ? (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotals
                order={state.order}
                tip={state.tip}
                //xx third step: añadir al componente
                dispatch={dispatch}
              />

            </>

          ) : (
            <p className="text-center font-bold uppercase">La orden está vacia</p>
          )}


        </div>
      </main>
    </>
  )
}

export default App
