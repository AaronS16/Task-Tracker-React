import { useState } from 'react' 
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Food shopping',
        day: 'Apr 8th',
        reminder: true,
    },
    {
        id: 2,
        text: 'Movie',
        day: 'Apr 7th at 11:45am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Dog shopping',
        day: 'Apr 7th after movie',
        reminder: 'false',
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
