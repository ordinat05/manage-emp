import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  // 🔻 1. YÖNTEM
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");
  //Formdan inputtan değer girildiği anda burada state bilgisi değişir.

  // 🔻 2. YÖNTEM START
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    adress: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };
  // 🔺 2. YÖNTEM END

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  // 🔻 Modal açıldıkça, kapandıkça çalıştır.
  // useEffect(() => {
  //   console.log("COMPONENT MOUNTED");
  //   return () => {
  //     console.log("COMPONENT UN-MOUNTED");
  //   };
  // }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        {/* <Form.Control type="text" placeholder="Name *" required /> */}
        <Form.Control
          type="text"
          placeholder="Name *"
          value={name}
          // 🔻 1. YÖNTEM
          // onChange={(e) => setName(e.target.value)}
          // 🔻 2. YÖNTEM
          name="name"
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          value={email}
          // onChange={(e) => setEmail(e.target.value)}
          // 🔻 2. YÖNTEM
          name="email"
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          value={address}
          // onChange={(e) => setAddress(e.target.value)}
          // 🔻 2. YÖNTEM
          name="address"
          onChange={(e) => onInputChange(e)}
          rows={3}
        />
      </Form.Group>
      {/* value={name} onChange={e => setName(e.target.value)}  */}
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Phone"
          value={phone}
          // onChange={(e) => setPhone(e.target.value)}
          // 🔻 2. YÖNTEM
          name="phone"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
