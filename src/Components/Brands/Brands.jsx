import React, { useEffect, useState } from 'react'
import "./Brands.css"
import axios from 'axios';
import { Button, Table } from 'antd';
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
            title:"Number",
            dataIndex:"number",
        },
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
           title: 'Images',
           dataIndex: 'images',
        },
        {
            title: 'Action',
            dataIndex: 'action',
        },
    ]
    const Data = brands.map((item,index)=>(
        {
            key:index,
            number:index+1,
            id:item.id,
            title:item.title,
            images: (<img
            width={150}
            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.image_src}`}
            alt={item.name}
          />
        ),
        action: (
          <>
            <Button  className="home-btn-a">Edit</Button>
            <Button  className="home-btn-b">Delete</Button>
          </>
        )
            
        }
    ))
  return (
    <div className='brands'>
      <div className='container brands-container'>
        <Table columns={columns} dataSource={Data}/>
      </div>
    </div>
  )
}

export default Brands


