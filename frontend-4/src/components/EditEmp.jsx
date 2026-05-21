import { useForm } from "react-hook-form"
import { useLocation , useNavigate } from "react-router"
import { useEffect } from "react";
import axios from 'axios';

function EditEmp() {
  const{
    register,
    handleSubmit,
    formState:{errors},
    setValue
  }=useForm()

  //get empObj from navigate hook
  const {state}=useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if (state) {
      setValue("name",state.name);
      setValue("email",state.email);
      setValue("mobile",state.mobile);
      setValue("designation",state.designation);
      setValue("companyName",state.companyName);
    }
  },[state, setValue]);

  const saveModifiedEmp=async(modifiedEmp)=>{
    if (!state) return;
    //make HTTP PUT req
    const res=await axios.put(`${import.meta.env.VITE_API_URL}/emp-api/employees/${state._id}`, modifiedEmp)
    if (res.status==200){
      //navigate to listOfEmps
      navigate('/list')
    }
  }

  if (!state) {
    return (
      <div className="p-10 text-center text-3xl text-gray-500">
        No employee data provided for editing. Please navigate from the Employee list.
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-5xl text-center text-yellow-600">Edit Employee</h1>

      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
          //disabled--by adding this we cannot edit email
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-green-600 text-white block mx-auto p-4">
          save
        </button>
      </form>
    </div>
  )
}

export default EditEmp