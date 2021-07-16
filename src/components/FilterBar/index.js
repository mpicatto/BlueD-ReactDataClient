import React,{useState} from 'react';
import {connect} from 'react-redux';
import {setData,setCrop} from '../../actions/queries';
import Axios from 'axios';
import data from './cultivos.json'

const FilterBar = (props) =>{


    const cultivos = data.cultivos
    const [query,setQuery] = useState({
        crop:"soy",
        from:"",
        to:""
    })

    const handleInputChange = (e)=>{
        setQuery({
            ...query,
            [e.target.name]:e.target.value
        })
    }

    const search =async()=>{
       props.setCrop(query.crop)
       let baseUrl='http://127.0.0.1:5000/data/' 
       await Axios.get(baseUrl+'?crop='+query.crop+'&from='+query.from+'&to='+query.to)
       .then(res=>{
           let data={date:[],price:[],stock:[],usdx:[]}
           res.data.map(item=>{
               item.fields.date=item.fields.date.slice(0,7)
               data.date.push(item.fields.date)
               data.price.push(item.fields.price.toFixed(2))
               data.stock.push(item.fields.stock)
               data.usdx.push(item.fields.usdx_value)
           })
           props.setData(data)
       })
       .catch(err=>{
           alert("No se ha podido realizar la busqueda")
       })
       setQuery({
           ...query,
           from:"",
           to:""
       })
    }

    return(
        <div class="flex md:flex-row flex-col justify-center items-center my-5" id="filter">
            <div class="flex flex-wrap mx-6 md:w-1/3 w-52">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Cultivo
                </label>
                <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                name="crop" 
                id="crop"
                onChange={(e)=>handleInputChange(e)}>
                    {cultivos.map(item => {
                        return <option value={item.value}>{item.name}</option>
                    })}
                </select>
            </div>
            <div class="flex flex-wrap mx-6 md:w-1/6 w-52">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Desde
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="from-date" type="date" name="from" onChange={(e)=>handleInputChange(e)} value={query.from}/>
            </div>
            <div class="flex flex-wrap mx-6 md:w-1/6 w-52">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Hasta
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                id="to-date" type="date" name="to" onChange={(e)=>handleInputChange(e)} value={query.to}/>
            </div>
            <div class="flex flex-wrap mx-6">
                <button type="button" class="bg-blue-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-blue-600 transition duration-200 each-in-out mt-3" onClick={()=>search()}
                >Buscar</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {		
    return {		
      data: state.query.data,
    }		
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setData: (resp)=>dispatch(setData(resp)),
      setCrop: (crop)=>dispatch(setCrop(crop))
    }
  }
      
  export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);  
