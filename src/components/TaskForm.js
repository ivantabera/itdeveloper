import React, { Component } from 'react';

export default class TaskForm extends Component{

    //definimos un estado para cada input
    state = {
        titulo: '',
        descripcion: ''
    }

    enviar = (event) => {
        console.log(this.state)
        event.preventDefault(); //prevenir que el formulario haga submit y refresque la pagina
    }

    cambio = (event) => {
        //console.log(event.target.name, event.target.value);
        this.setState({  //nos permite cambiar el estado de los datos en la variable "state"
            [event.target.name]: event.target.value  //obtener el valor de cada input por su nombre y para que funcione se pone entre corchetes
        })
    }

    render(){
        return(
            <form onSubmit={this.enviar}>

                <input 
                    type="text"     
                    name="titulo" 
                    placeholder="Escribe una tarea" 
                    onChange={this.cambio} 
                    value={this.state.titulo}/>

                <br/><br/>

                <textarea 
                    name="descripcion" 
                    placeholder="Escribe una descripcion de la tarea" 
                    onChange={this.cambio} 
                    value={this.state.descripcion}>
                </textarea>

                <br/>

                <input type="submit"/>

            </form>
        )
    }
}