import React from 'react'

//------------components---------------------

import FilterBar from '../FilterBar/index'
import Graphic from '../Graphic/index'
import DataTables   from '../Table/index'


const Home = () =>{
    return(
        <div>
        <FilterBar/>
        <Graphic/>
        <DataTables/>
        </div>
    )
}

export default Home