import React,{useState} from 'react'
import {connect} from 'react-redux';
import Graph from './LineGraphs'
import json from '../FilterBar/cultivos.json'

const Chart=(props)=>{

    // const cultivos = json.cultivos

  
    const [mainY,setMainY] = useState("Precio")
    const [secondY,setSecondY] = useState("Stock")
    const labels=props.data.date

    const handleMain = (e)=>{
        setMainY(e.target.value)
    }

    const handleSecond = (e)=>{
        setSecondY(e.target.value)
    }
    
    return(
        <div className="flex flex-col justify-center">
            <div class="flex flex-row justify-center items-center mt-5">
                <h1 className="text-3xl">{props.crop==="soy"?"Soja":"Maíz"}</h1>
            </div>
            <div class="flex flex-row justify-center items-center my-5">
                <Graph 
                data={props.data.price} 
                data2={props.data.stock} 
                data3={props.data.usdx} 
                labels={labels} 
                labelY={mainY} 
                labelY2={secondY}
                yAxis={json.info}
                />
                
            </div>
     
            <div class="flex flex-row justify-center items-center my-5">
              <div class="flex flex-wrap mx-6">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Eje Principal
                  </label>
                  <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  name="main" 
                  id="main"
                  onChange={(e)=>handleMain(e)}
                  value={mainY}>
                      {json.info.map(item => {
                          return <option value={item.name}>{item.name}</option>
                      })}
                  </select>
              </div>
              <div class="flex flex-wrap mx-6">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Eje Secundario
                  </label>
                  <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  name="second" 
                  id="second"
                  onChange={(e)=>handleSecond(e)}
                  value={secondY}>
                      {json.info.map(item => {
                          return <option value={item.name}>{item.name}</option>
                      })}
                  </select>
              </div>
          </div>
        </div>
    )
}


const mapStateToProps = state => {		
    return {		
      data: state.query.data,
      crop: state.query.crop
    }		
  }
  
      
export default connect(mapStateToProps)(Chart);  