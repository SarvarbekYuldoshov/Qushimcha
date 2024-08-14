import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios';
import { Button, Form, Input, Modal, Table, message } from 'antd';
const Home = () => {
    const [cities,setCities] = useState([]);
    const [open,setOpen] = useState(false)
    const [image,setImage] = useState(null)
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
   const data = cities.map((city, index) => ({
        number: index + 1,
        key: index,
        name: city.name,
        text: city.text,
        images: (
            <img 
                width={150}
                src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${city.image_src}`} 
                alt={city.name} 
            />
        ),
        action: (
            <>
                <Button type='primary' onClick={() => showModal(city)}>Edit</Button> 
                <Button type='primary' danger onClick={() => deleteCities(city.id)}>Delete</Button>
            </>
        )
    }));

    const handleSubmit = (values) => {
       const formData = new FormData();
       formData.append('name', values.name);
       formData.append('text', values.text);
       formData.append('image', values.images[0]);
    axios({
        url:'https://autoapi.dezinfeksiyatashkent.uz/api/cities',
        method:'POST',
        headers:{
            Authorization:  `Bearer ${localStorage.getItem('token')}`
        },
        data:formData,
    }).then(res=>{
        if(res.data.succes){
           message.success("Qushildi")
           setOpen(false)
           getCities()
        }
    }).catch(err=>console.log(err))
}
  return (
    <div className='home'>
      <div className='container home-container'>
        <Button className='home-btn' onClick={showModal}>Qushish</Button>
        <Table columns={columns} dataSource={data}/>
        <Modal open={open} onCancel={closeModal}>
            <Form
            onFinish={handleSubmit}
            >
                <Form.Item
                 label="Username"
                 name="username"
                >
                    <Input placeholder='Username' className='home-input-a'/>
                </Form.Item>
                <Form.Item
                label="Password"
                name="password"
                >
                    <Input placeholder='Password' className='home-input-b'/>
                </Form.Item>
                <Form.Item 
                 label="Images"
                 name="images"
                >
                    <Input onChange={(e)=>setImage(e.target.value)} type='file' placeholder="Images" className='home-input-c'/>
                </Form.Item>
            </Form>
            <Button className='home-btn-d' htmlType='submit'>Submit</Button>
        </Modal>
      </div>
    </div>
  )
}

export default Home
