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

  borrarTarea = (id) => {
    const nuevasTareas = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: nuevasTareas})
  }

  checkDone = (id) => {
    const nuevasTareas = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: nuevasTareas})
  }

  render (){
    return <div>
      <TaskForm agregarNuevaTarea={this.agregarTarea}/>
      <Tasks tasks= {this.state.tasks} borraTarea={this.borrarTarea} checkDone={this.checkDone} />
    </div>
 }

}

export default App;
