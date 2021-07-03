import {useState} from 'react';
function FrutasVersionFuncional(){
  const [listadoDeFrutas, setListadoDeFrutas] = useState(["Manzana","Pera","Fresa"]);


  const agregarFruta = e => {
    e.preventDefault(); //Para que el formulario no refresque la pantalla
    let nuevaFruta = e.target.nuevaFruta.value;
    setListadoDeFrutas([
      ...listadoDeFrutas, nuevaFruta //Usamos el express operator
    ]);
    e.target.nuevaFruta.value = ''; //Limpia el input una vez ingresada la fruta.
  }

  //console.log(listadoDeFrutas)
  return(
    <div>
        <h2>Soy el componente FRUTAS FUNCTION</h2>
        <ul>
          {
            listadoDeFrutas.map((fruta,i)=> {
              return <li key={i}>{fruta}</li>
            })
          }
        </ul>
        <form onSubmit={agregarFruta}>
          <input name='nuevaFruta' type='text'/><br/>
          <button>Añadir nueva fruta</button>
        </form>
      </div>
  )
}
export default FrutasVersionFuncional;