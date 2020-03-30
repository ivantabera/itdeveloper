import React, { Component } from 'react';
import './App.css';
import tasks from './ejemplo/task.json';

//Componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component{

  state = {
    tasks: tasks
  }

  agregarTarea = (titulo, descripcion) => {
    const nuevaTarea = {
      id: this.state.tasks.length,
      title:  titulo, 
      description: descripcion
    }

    this.setState({
      tasks: [...this.state.tasks, nuevaTarea]
    })
  }

  render (){
    return <div>
      <TaskForm agregarNuevaTarea={this.agregarTarea}/>
      <Tasks tasks= {this.state.tasks}/>
    </div>
 }

}

export default App;
