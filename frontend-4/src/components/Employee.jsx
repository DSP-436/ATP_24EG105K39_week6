import { useLocation } from "react-router"

function Employee() {
  //read state received in navigation
  const {state}=useLocation();

  if (!state) {
    return (
      <div className="p-10 text-center text-3xl text-gray-500">
        No employee details found. Please navigate from the Employee list.
      </div>
    );
  }

  return (
    <div className="p-10 text-center text-3xl">
      <p>{state.name}</p>
      <p>{state.email}</p>
      <p>{state.mobile}</p>
      <p>{state.designation}</p>
      <p>{state.companyName}</p>
    </div>
  )
}

export default Employee