import { useState, useEffect } from "react";
import CRUD_OP from "../services/Employee.services";
import { useNavigate } from "react-router-dom";
import "./showEmp.css";

export default function showEmp() {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CRUD_OP.getEmployees();
        setEmpList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  const handleDelete = async (empId) => {
    try {
      await CRUD_OP.deleteEmployee(empId);
      alert("User deleted successfully...");
      setEmpList((prev) => prev.filter((emp) => emp.id !== empId));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(empList);
  return (
    <div className="showEmp">
      <h2 className="page-title">Employee Management System</h2>
      <div className="table-wrapper">
        <table className="emp-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Address</th>
              <th>Type</th>
              <th>Dept</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empList?.map((emp, idx) => {
              return (
              <tr key={emp.id}>
                <td>{idx + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.age}</td>
                <td>{emp.address}</td>
                <td>{emp.empType}</td>
                <td>{emp.dept}</td>
                <td>{emp.salary}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-edit"
                      onClick={() => navigate("/updateEmp", { state: emp })}
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(emp.id)}
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//
