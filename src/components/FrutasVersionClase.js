import React, { Component } from 'react';

class FrutasVersionClase extends Component {
  constructor(){
    super();
    this.state = {
      listadoDeFrutas: ['Manzana', 'Pera', 'Platano']
    }
  }

  agregarFruta = e => {
    e.preventDefault(); //Para que el formulario no refresque la pantalla
    let nuevaFruta = e.target.nuevaFruta.value;
    this.setState({
      listadoDeFrutas: [
        ...this.state.listadoDeFrutas, nuevaFruta //Usamos el express operator
      ]
    });
    e.target.nuevaFruta.value = ''; //Limpia el input una vez ingresada la fruta.
  }


  render (){
    return(
      <div>
        <h2>Soy el componente FRUTAS CLASS</h2>
        <ul>
          {
            this.state.listadoDeFrutas.map((fruta,i)=> {
              return <li key={i}>{fruta}</li>
            })
          }
        </ul>
        <form onSubmit={this.agregarFruta}>
          <input name='nuevaFruta' type='text'/><br/>
          <button>Añadir nueva fruta</button>
        </form>
      </div>
    )
  }
}



export default FrutasVersionClase;