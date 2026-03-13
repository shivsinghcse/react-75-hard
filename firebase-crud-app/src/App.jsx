import { useEffect, useState } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Swal from "sweetalert2"
import firebaseConfigApp from "./lib/firebase-config"
import { getFirestore, addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore"



const db = getFirestore(firebaseConfigApp)

const App = () => {
  const model = {
      employeeName: '',
      salary: '',
      joiningDate: ''
  }
  const [employee, setEmployee] = useState(model)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isUpdated, setIsUpdated] = useState(false)
  const [employeeData, setEmployeeData] = useState([])
  const [edit, setEdit] = useState(null)

  useEffect(()=> {
    const request = async () => {
      const snapshot = await getDocs(collection(db, 'employees'))
      setIsEmpty(snapshot.empty)
      let temp = []

      snapshot.forEach((doc) => {
        
        const documents = doc.data()
        documents.uid = doc.id
        temp.push(documents)
      })
      setEmployeeData(temp)
    }
    request()
  }, [isEmpty, isUpdated])


  const createEmployee = async (e) => {
    try
    {
      e.preventDefault()
      await addDoc(collection(db, "employees"), employee)
      setIsEmpty(false)
      setIsUpdated(!isUpdated)
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Employee created'
      })
      
    }
    catch(err)
    {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: err.message
      })
    }
    finally
    {
      setEmployee(model)
    }
    
  }

  const handleInput = (e) => {
    const input = e.target
    const name = input.name 
    const value = input.value

    setEmployee({
      ...employee,
      [name]: value
    })
  }

  const editEmployee = (emp) => {
    setEdit(emp)
    setEmployee(emp)
    

  }

  const saveEmployee = async (e) => {
    e.preventDefault()
    const ref = doc(db, "employees", edit.uid)
    await updateDoc(ref, employee)
    setIsUpdated(!isUpdated)
    setEdit(null)
    setEmployee(model)
  }

  const deleteEmployee = async (id) => {
    const ref = doc(db, "employees", id)
    await deleteDoc(ref)
    // Swal.fire({
    //     icon: 'success',
    //     title: 'Deleted!',
    //     text: "Employee deleted Successfully."
    // })
    setIsUpdated(!isUpdated)
  }
  
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline underline-offset-6 decoration-[dodgerblue] text-center mt-8 mb-16">React- <span className="text-[dodgerblue]">Firebase CRUD</span> App</h1>
        <div className="w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="shadow-lg border border-gray-300 rounded p-6">
            <form className="flex flex-col gap-6" onSubmit={edit ? saveEmployee : createEmployee}>
              <div className="flex flex-col gap-2">
                <label htmlFor="employeeName" className="font-semibold">Employee</label>
                <input 
                  type="text"
                  name="employeeName"
                  id="employeeName"
                  placeholder="John Doe"
                  onChange={handleInput}
                  required
                  value={employee.employeeName}
                  className="p-2 border border-gray-500 rounded"
                 />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="salary">Salary</label>
                <input 
                  type="number"
                  name="salary"
                  id="salary"
                  onChange={handleInput}
                  placeholder="50000"
                  required
                  value={employee.salary}
                  className="p-2 border border-gray-500 rounded"
                  
                 />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="joiningDate">Date of Joining</label>
                <input 
                  type="date"
                  name="joiningDate"
                  id="joiningDate"
                  onChange={handleInput}
                  required
                  value={employee.joiningDate}
                  className="p-2 border border-gray-500 rounded"
                 />
              </div>

              <button className="bg-[dodgerblue] text-white font-semibold text-lg py-2 px-6 w-fit rounded hover:cursor-pointer transition active:scale-95 my-6">{edit ? 'Save' : 'Create'}</button>
            </form>
          </div>
          <div className="border rounded shadow border-gray-300">
            {
              isEmpty ? (
                <div className="flex flex-col justify-center w-full h-full items-center select-none">
                  <i className="bi bi-trash2-fill text-gray-300 text-9xl"></i>
                  <h1 className="text-lg font-semibold text-gray-300">Employee doesn't exist</h1>
                </div>
              )
              : 
              (
                <div className="px-6 py-4">
                  <h1 className="text-2xl font-semibold text-center underline text-[dodgerblue] mb-6">Employees</h1>
                  <table className="w-full">
                    <thead>
                      <tr className=" bg-indigo-600 text-white text-left">
                        <th className="py-2 pl-2">S/No</th>
                        <th>Employee Name</th>
                        <th>Salary</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        employeeData.map((employee, index) => {
                          return(
                            <tr className="border-b border-gray-300 text-left" key={index}>
                              <td className="py-2 pl-2">{index+1}</td>
                              <td className="capitalize">{employee.employeeName}</td>
                              <td>₹{Number(employee.salary)}</td>
                              <td>{employee.joiningDate}</td>
                              <td>
                                <div className="flex justify-start items-center gap-3">
                                  <button className="w-6 h-6 rounded-full bg-green-500 text-white hover:cursor-pointer" onClick={() => editEmployee(employee)}>
                                      <i className="ri-edit-2-fill"></i>
                                  </button>

                                  <button className="w-6 h-6 rounded-full bg-red-500 text-white hover:cursor-pointer" onClick={() => deleteEmployee(employee.uid)}>
                                      <i className="ri-delete-bin-4-line"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App