import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';
import { Button, Form, Input, Modal, Table } from 'antd';
const Home = () => {
    const [cities,setCities] = useState([]);
    const [open,setOpen] = useState(false)
    const getCities = () =>{
        axios.get('https://autoapi.dezinfeksiyatashkent.uz/api/cities')
        .then(res=>setCities(res.data.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getCities()
    },[])
    const showModal = () =>{
        setOpen(true)
    }
    const closeModal = () =>{
        setOpen(false)
    }
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
        {
            title:"Action",
            dataIndex:"action"
        }
    ]
    const data = cities.map((city,index)=>(
        {
            number:index+1,
            key:index,
            name:city.name,
            text:city.text,
            images:(<img width={150} src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${city.image_src}`}/>),
            action:(<><Button className= "home-btn-a">Edit</Button><Button className= "home-btn-b">Delete</Button></>)
        }
    ))
  return (
    <div className='home'>
      <div className='container home-container'>
        <Button className='home-btn' onClick={showModal}>Qushish</Button>
        <Table columns={columns} dataSource={data}/>
        <Modal open={open} footer={null}>
            <Form>
                <Form.Item>
                    <Input className='home-input'/>
                </Form.Item>
                <Form.Item>
                    <Input className='home-input'/>
                </Form.Item>
                <Form.Item>
                    <Input className='home-input'/>
                </Form.Item>
            </Form>
        </Modal>
      </div>
    </div>
  )
}

export default Home
