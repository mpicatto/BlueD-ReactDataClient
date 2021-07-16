import React from 'react';
import {connect} from 'react-redux';

export function CropTable(props) {

  return (
      <div >
      <table class="rounded-t-lg m-5 w-5/6 mx-auto text-gray-100 bg-gradient-to-l from-indigo-500 to-indigo-800" >
        <tr class="text-left border-b-2 border-indigo-300 text-2xl" >
            <th class="px-4 py-3 ">Fecha</th>
            <th class="px-4 py-3">Precio</th>
            <th class="px-3 py-3">Stock</th>
            <th class=" py-3">Indice Dolar</th>
        </tr>
        {props.data.date.map((item, i)=>{
          return(
            <tr class="border-b border-indigo-400 text-md">
              <td class="px-4 py-3">{item}</td>
              <td class="px-4 py-3">{props.data.price[i]}</td>
              <td class="pl-5 pr-10 py-3">{props.data.stock[i]}</td>
              <td class="md:pl-8 pl-5 py-3">{props.data.usdx[i]}</td>
            </tr>
          )
        })}

      </table>
    </div>    
  );
};

const mapStateToProps = state => {		
    return {		
      data: state.query.data,
      crop: state.query.crop
    }		
  }

export default connect(mapStateToProps)(CropTable);