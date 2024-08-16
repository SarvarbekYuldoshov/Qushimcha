import React, { useEffect, useState } from 'react'
import "./Brands.css"
import axios from 'axios'
const Brands = () => {
    const [brands,setBrands] = useState()
    const getBrands = () => {
        axios.get('https://autoapi.dezinfeksiyatashkent.uz/api/brands')
        .then((res)=>setBrands(res.data.data))
        .catch((err)=>console.log(err))
    }
    useEffect(() => {
        getBrands();
    }, [])
  return (
    <div className='brands'>
      <div className='container brands-container'>
          <ul className='brands-list'>
            <h1 className='brands-title'>Brands</h1>
          </ul>
          <ul className='brands-list'>
            {
                brands && brands.map((item,index)=>{
                    <div key={index}>
                        <h3>{item.name}</h3>
                    </div>
                })
            }
          </ul>
      </div>
    </div>
  )
}

export default Brands
