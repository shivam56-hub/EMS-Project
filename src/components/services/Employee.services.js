import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore"
import {db} from "../../../config/firebase-config"

// Get the collection reference from DB...
const employeeCollectionRef = collection(db, "Employees")

// get all the employees
const getEmployees = () => {
    const employeeList = getDocs(employeeCollectionRef)
    return employeeList;
}
// get single/one  employees in the list
const getEmployee = (id) =>{
    const employeeDoc = doc(db,"Employees",id)
    return employeeDoc;
}
// add an employee
const addEmployee = (newEmp) => {
    return addDoc(employeeCollectionRef, newEmp)
}

// update an employee
const updateEmployee = async (id, employeeUpdate) => {
    try {
        const employeeDoc = doc(db,"Employees",id)
        await updateDoc(employeeDoc, employeeUpdate)
    }
    catch(error){
        console.log("Error updating employees",error)
    }
}
// Delete an employee
const deleteEmployee = (id) => {
    const employeeDoc = doc(db, "Employees", id)
    return deleteDoc(employeeDoc)
}


 const CURD_OP = {
    getEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee

 }
export default CURD_OP;
