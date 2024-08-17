import React, { useEffect, useState } from 'react'
import "./Brands.css"
import axios from 'axios';
import { Button, Form, Input, Modal, Table } from 'antd';
const Brands = () => {
    const [brands,setBrands] = useState([]);
    const [openMoodal,setOpenModal] = useState(false)
    const getBrands = () => {
        axios.get('https://autoapi.dezinfeksiyatashkent.uz/api/brands')
        .then((res)=>setBrands(res.data.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getBrands();
    })
    const showModal = () =>{
        setOpenModal(true)
    }
    const closeModal = () => {
        setOpenModal(false)
    }
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
        <Button onClick={showModal}>Brand Qushish</Button>
        <Table columns={columns} dataSource={Data}/>
        <Modal open={openMoodal} footer={null} onCancel={closeModal}>
            <Form>
                <Form.Item label="Name" name="name">
                    <Input placeholder='Name' />
                </Form.Item>
                <Form.Item label="Text"name="text" >
                    <Input placeholder='Text' />
                </Form.Item>
                <Form.Item label="Images" name="images">
                    <Input type='file' placeholder='Images' />
                </Form.Item>
                <Form.Item label="Name">
                    <Button>Submit</Button>
                </Form.Item>
            </Form>
        </Modal>
      </div>
    </div>
  )
}

export default Brands


