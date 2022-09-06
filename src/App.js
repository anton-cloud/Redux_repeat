import { useDispatch, useSelector } from "react-redux";
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  console.log(customers);

  const addCash = (cash) => {
    // dispatch({ type: "ADD_CASH", payload: cash })
    dispatch(addCashAction(cash))
  }

  const getCash = (cash) => {
    // dispatch({ type: "GET_CASH", payload: cash })
    dispatch(getCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = { name: name, id: Date.now() }
    // dispatch({ type: "ADD_CUSTOMER", payload: customer })
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    // dispatch({ type: "REMOVE_CUSTOMER", payload: customer.id })
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>+</button>
        <button onClick={() => getCash(Number(prompt()))}>-</button>
      </div>

      <div style={{ display: "flex " }}>
        {customers.length > 0 ? <div>{customers.map((customer) => <p key={customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</p>)}</div> : <div>customers none</div>}
      </div>
      <button onClick={() => addCustomer(prompt())}>+</button>
    </div >
  );
}

export default App;
