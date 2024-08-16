import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { Button, Form, Input, Modal, Table, message } from 'antd';
import Login from '../Login/Login';

const Home = () => {
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false); 
  const [image, setImage] = useState(null);
  const [currentCitiy,setCurrentCitiy] = useState(null)

  const getCities = () => {
    axios
      .get('https://autoapi.dezinfeksiyatashkent.uz/api/cities')
      .then((res) => setCities(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCities();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Text',
      dataIndex: 'text',
    },
    {
      title: 'Images',
      dataIndex: 'images',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];

  const data = cities.map((city, index) => ({
    key: index,
    number: index + 1,
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
        <Button onClick={()=>(showModal(city))} className="home-btn-a">Edit</Button>
        <Button onClick={() => deleteCities(city.id)} className="home-btn-b">
          Delete
        </Button>
      </>
    ),
  }));

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('text', values.text);
    formData.append('images', image);

    axios({
      url: 'https://autoapi.dezinfeksiyatashkent.uz/api/cities',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      data: formData,
    })
      .then((res) => {
        if (res.data.success) {
          message.success('Qushildi');
          setOpen(false);
          getCities();
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteCities = (id) => {
    axios({
      url: `https://autoapi.dezinfeksiyatashkent.uz/api/cities/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        getCities();
        message.success('Uchirildi');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <div className="container home-container">
        <Button className="home-btn" onClick={showModal}>
          Shahar Qushish
        </Button>
        <Table columns={columns} dataSource={data} />
        <Modal open={open} footer={null} onCancel={closeModal}>
          <Form onFinish={handleSubmit}>
            <Form.Item
              className="home-item-a"
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input className="home-input-a" placeholder="Name" />
            </Form.Item>
            <Form.Item
              className="home-item-b"
              label="Text"
              name="text"
              rules={[{ required: true, message: 'Please input the text!' }]}
            >
              <Input className="home-input-b" placeholder="Text" />
            </Form.Item>
            <Form.Item
              className="home-item-c"
              label="Images"
              name="images"
              rules={[{ required: true, message: 'Please upload an image!' }]}
            >
              <Input
                onChange={(e) => setImage(e.target.files[0])}
                className="home-input-c"
                type="file"
              />
            </Form.Item>
            <Form.Item className="home-item-d" label="Qushish">
              <Button htmlType="submit" className="home-btn-d">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Home;
