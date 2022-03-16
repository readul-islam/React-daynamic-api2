import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { Button } from 'bootstrap';

function App() {
  return (
    <div className="App">
      
    <Dataload></Dataload>
    {/* <DisplayData></DisplayData> */}
    
    </div>
  );
}
function Dataload() {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() =>{
fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then((response) => response.json())
.then(allData => setData(allData))
  },[])

  return (
    
    <div className="mainSection">
      <div className="row row-cols-1 row-cols-md-4  g-5">
      {
        data.map(info => <DisplayData
           name={info.name} 
           img={info.image_link}
           description={(info.description)? info.description.slice(0,150): info.description}
           price={info.price}
           rating={info.rating}
           api_featured_image = {info.api_featured_image}
           
        ></DisplayData>)
      }
     
    </div>
    </div>
    
  )
}
function DisplayData(props){

  return(
    <div className="col ">
    <div id="cards" className="card border-0 shadow-lg p-3 mb-5 bg-body rounded">
      <img  src={props.img} className="card-img-top image " alt="..."/>
      <div className="card-body">
        <h2 className="card-title">{props.name.slice(0,25)}</h2>
        <p className="description">{props.description} </p>
        <button className="btn btn-warning px-5">
       Details 
       
      </button>
      
      </div>
      
      <div >
      
      
      </div>
      </div>
      
  </div>
  )
}

export default App;
