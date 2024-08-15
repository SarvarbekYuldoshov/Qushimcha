import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { Button, Form, Input, Modal, Table } from 'antd'
const Home = () => {
    const [cities,setCities] = useState([])
    const [open,setOpen] = useState([])
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
    const closModal = () =>{
        setOpen(false)
    }
    const columns = [
        {
            title:"Number",
            dataIndex:"number",
        },
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
            dataIndex:"action",
        }
    ]
    const data = cities.map((city,index)=>(
        {
            key:index,
            number:index+1,
            name:city.name,
            text:city.text,
            images:
            <img 
            width={150} 
            src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${city.image_src}`}/>,
            action:(<><Button className='home-btn-a'>Edit</Button><Button className='home-btn-b'>Delete</Button></>)
        }
    ))
    const handleSubmit = (values) =>{
        console.log(values).text
    }
  return (
    <div className='home'>
        <div className='container home-container'>
            <Button className='home-btn' onClick={showModal}>Shahar Qushish</Button>
            <Table columns={columns} dataSource={data}/>
            <Modal open={open} footer={null} onCancel={closModal} >
                <Form>
                    <Form.Item className='home-item-a' label="Name">
                        <Input className='home-input-a' placeholder='Name' />
                    </Form.Item>
                    <Form.Item className='home-item-b'  label="Text">
                        <Input className='home-input-b' placeholder='Text' />
                    </Form.Item>
                    <Form.Item className='home-item-c'  label="Images">
                        <Input className='home-input-c' placeholder='Images' type='file'/>
                    </Form.Item>
                    <Form.Item className='home-item-d'  label="Qushish">
                        <Button className='home-btn-d'>Sumbit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    </div>
  )
}

export default Home

