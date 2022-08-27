import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { Button, Modal } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // 🔻 Employees de değişiklik olduğu zaman MODALI kapat. handleClose
  // useEffect(()=> {
  //   handleClose();
  // },[employees])

  // 🔻 Sayfadaki Açılışta her bir değişiklikte çalışacak
  // useEffect(() => {
  //   console.log("COMPONENT RENDERED");
  // });

  // // 🔻 org denemesi Her seferinde 1 arttırıyor
  // const [count, setCount] = useState(0);

  // // 🔻 useEffect sideEffect   de yapsın farklı bir işlem daha yapsın.
  // useEffect(() => {
  //   // Update the document title using the browser API Browser sekmesinde sayıyla title değiştiriyor
  //   document.title = `You clicked ${count} times`;
  // });

  // 🔻 başka [employees] değişiklik olduğu zaman useEffect(() çalışacak başka çalışmayacak
  // useEffect(() => {
  //   console.log("COMPONENT RENDERED");
  // }, [employees]);

  // 🔻 sadece ilk açılışta çalışır, sonra çalışmaz.
  // useEffect(() => {
  //   console.log("COMPONENT RENDERED");
  // }, []);

  // 🔻
  useEffect(() => {
    handleClose();
  }, [employees]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
      {/* useEffet sayaç için */}
      {/* <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div> */}
    </>
  );
};
export default EmployeeList;
