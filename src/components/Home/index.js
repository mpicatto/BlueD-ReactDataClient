import React from 'react'

//------------components---------------------
import NavBar from '../NavBar/index'
import FilterBar from '../FilterBar/index'
import Graphic from '../Graphic/index'
import DataTables   from '../Table/index'
import Footer from '../Footer/index'

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