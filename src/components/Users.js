import Task from "./User";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks!==null?tasks.map((task) => (
        <Task key={task.id} task={task} onDelete = {onDelete} />
      )):""}
    </>
  );
};

export default Tasks;
