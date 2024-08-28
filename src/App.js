import './App.css';
import react, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  const [tasks, setTasks] = useState([]);

  const inputFocus = useRef();

  const adTask = () => {
    const text = inputFocus.current.value;
    const completed = false
    const newItem = { completed, text };
    setTasks([...tasks, newItem]);
    inputFocus.current.value = '';
  };

  const Done = (index) => {
    const ControlTasks = [...tasks];
    ControlTasks[index].completed = !ControlTasks[index].completed;
    setTasks(ControlTasks);
  }

  const del = (index) => {
    const delTask = [...tasks];
    delTask.splice(index, 1);
    setTasks(delTask);
  }



  return (
    <Form className='form'>
      <div className='todos'>
        <Form.Label className='txt'>ToDo List</Form.Label>

        <Form.Group controlId='exampleForm.ControlInput2' className='mb-5'>
          <ul>
            {tasks.map(({ text, completed }, index) => {
              return <div className='tasksList'>
                <li className={completed ? "Done" : ""} key={index} onClick={() => Done(index)}>{text}</li>
                <span onClick={del}>✖️</span>

              </div>;
            })}
          </ul>
          <Form.Control type='text' placeholder='New task...' size='lg' className='password' ref={inputFocus} />
        </Form.Group>
        <Button className='btn' onClick={adTask}>Add</Button>
      </div>
    </Form>

  );
}

export default App;
