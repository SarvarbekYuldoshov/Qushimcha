import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';
import { Table } from 'antd';
const Home = () => {
    const [cities,setCities] = useState([]);
    const getCities = () =>{
        axios.get('https://autoapi.dezinfeksiyatashkent.uz/api/cities')
        .then(res=>setCities(res.data.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getCities()
    },[])
    const columns = [
        {
            title:"Name",
            dataIndex:"name",
        },
        {
            title:"Text",
            dataIndex:"text",
        },
        {
            title:"Images",
            dataIndex:"images",
        },
    ]
    const data = cities.map((city,index)=>(
        {
            number:index+1,
            key:index,
            name:city.name,
            text:city.text,
            images:city.images
        }
    ))
  return (
    <div className='home'>
      <div className='container home-container'>
        <Table columns={columns} dataSource={data}/>
      </div>
    </div>
  )
}

export default Home
