import React, { useState } from 'react';

const TodoListApp = () => {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to hold the current task input value
  const [taskInput, setTaskInput] = useState('');

  // Function to handle task input change
  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to add a new task to the list
  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), description: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  // Function to remove a task from the list
  const handleRemoveTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className='bg-danger-subtle'>
      <h2 className='text-center'><u>Need to add the tasks for my trip</u></h2>
      <div >
        <input type="text" value={taskInput} onChange={handleTaskInputChange} />
        <br />
        <button onClick={handleAddTask} className='btn btn-info'>Add Task</button>
      </div>
      <br />
      <h2 className='text-center'><u>Need to check the tasks for my trip</u></h2>

      <ol>
        {tasks.map((task) => (
          
          <li key={task.id}>
            <span>{task.description}</span>
            <br />
            <button onClick={() => handleRemoveTask(task.id)} className='btn btn-danger'>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoListApp;
