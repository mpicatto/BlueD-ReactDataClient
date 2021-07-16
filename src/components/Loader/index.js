import React,{useEffect} from "react";
import {useHistory} from 'react-router-dom';
import Axios from 'axios'
import {connect} from 'react-redux';
import {setData,setCrop} from '../../actions/queries';


export function Loader(props) {
    useEffect(()=>{
        search()
      },[])
  
  const history = useHistory()

  const search =async()=>{
    let baseUrl='http://127.0.0.1:5000/data/?crop=soy' 
    await Axios.get(baseUrl)
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
        props.setCrop("soy")
        
    })
    .catch(err=>{
        alert("No se ha podido realizar la busqueda")
    })
    history.push("/home")
 }
 return(
     <div class="flex flex-row justify-center items-center mt-5 ">
        <div className="flex flex-col justify-center my-20">
            <img class="object-cover w-60 h-60 my-20 p-10" src="/Spinner-5.gif" alt=""/>
            <h1 className="text-3xl mb-20">{"LOADING..."}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Loader);