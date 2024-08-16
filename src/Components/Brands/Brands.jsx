import React, { useEffect, useState } from 'react'
import "./Brands.css"
import axios from 'axios';
const Brands = () => {
    const[brands,setBrands] = useState([]);
    const getBrands = () => {
        axios.get('https://autoapi.dezinfeksiyatashkent.uz/api/brands')
        .then((res)=>setBrands(res.data.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getBrands();
    })
    const columns = [
        {
            title: 'Brand',
            dataIndex: 'brand_name',
        },
        {
            title: 'Logo',
            dataIndex: 'brand_logo',
        },
        {
            title: 'Action',
            key: 'action',
        },
    ]
  return (
    <div className='brands'>
      <div className='container brands-container'>

      </div>
    </div>
  )
}

export default Brands


