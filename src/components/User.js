import { FaAlignCenter, FaTimes } from "react-icons/fa";
// import AddUser from "./AddUser";
import { useState } from "react";
import Button from "./Button";

const Task = ({ task, onDelete }) => {
  const [isEditUser, setIsEditUser] = useState(false);
  const [name, setName] = useState(task.name);
  const [bday, setBday] = useState(task.bday);
  const [gender, setGender] = useState(task.gender);
  const [city, setCity] = useState(task.city);

  const editUser = () => {
    setIsEditUser(!isEditUser);
  };

  const onGenderChange = (event) => {
    setGender(event.target.value);
    // console.log(gender)
  };

  const onNameChange = (event) => {
    setName(event.target.value);
    // console.log(name)
  };
  const onBdayChange = (event) => {
    setBday(event.target.value);
    // console.log(bday)
  };

  const onCityChange = (event) => {
    setCity(event.target.value);
  };

  const updateUser = () => {
    console.log("User Name: " + name);
    console.log("Date Of Birth: " + bday);
    console.log("Gender: " + gender);
    console.log("City: " + city);
    setIsEditUser(!isEditUser);
  };

  return (
    <div className="task">
      <h3>
        {name}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      {isEditUser ? (
        <input type="text" defaultValue={task.name} onChange={onNameChange} />
      ) : (
        ""
      )}
      <p>Date of Birth : {bday}</p>
      {isEditUser ? (
        <input type="text" defaultValue={task.bday} onChange={onBdayChange} />
      ) : (
        ""
      )}
      <p>Gender : {gender}</p>
      {isEditUser ? (
        <div className="form-control form-control-check">
          <input
            type="radio"
            value="Male"
            name="gender"
            onChange={onGenderChange}
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            onChange={onGenderChange}
          />
          Female
          <input
            type="radio"
            value="Other"
            name="gender"
            onChange={onGenderChange}
          />
          Other
        </div>
      ) : (
        " "
      )}
      <p>City : {city}</p>
      {isEditUser ? (
        <input type="text" defaultValue={task.city} onChange={onCityChange} />
      ) : (
        ""
      )}<br/>
      <br/>
      {isEditUser ?
    //     <div style={{marginLeft:"auto",marginRight:"auto",display:"flex",textAlign:"center",}}>
    //       <Button align="center" color="green" text="Save Details" onClick={updateUser} />
    //   </div> 
    <input
          type="button"
          value="Save Details"
          className="btn btn-block"
          style={{width: "40%",marginLeft:"auto",marginRight:"auto",backgroundColor:"#414586"}}
          onClick={updateUser}
        />
      : 
        <input
          type="button"
          value="Edit Details"
          className="btn btn-block"
          onClick={editUser}
        />
    }
    </div>
  );
};

export default Task;
