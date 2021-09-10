import Header from "./components/Header";
import Tasks from "./components/Users";
import { useState } from "react";
import data from "./components/SampleData";
import Button from "./components/Button"
import AddUser from "./components/AddUser";
// import AddButton from './Button'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isaddUser, setisaddUser] = useState(false);
  const [isviewUser, setisviewUser] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter(i=>i.id!==id))
  }

  const loadData = () => {
    setTasks(data)
    setisviewUser(!isviewUser)
  }

  const adduser = () => {
    setisaddUser(!isaddUser)
  }

  return (
    <div className="container">
      <Header />
      <Button color='green' text='Add User' onClick={adduser}/>
      {isaddUser?
      <AddUser/>:''}
      <Button text="View User List" onClick={loadData} />
      <br /><br />
      {isviewUser?
      (tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete = {deleteTask} />
      : 
        "No User Details Available..."
      ):""}
    </div>
  );
};

export default App;
