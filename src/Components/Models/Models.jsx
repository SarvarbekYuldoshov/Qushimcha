import React, { useEffect } from 'react'
import "./Models.css"
import axios from 'axios'
const Models = () => {
    const [models, setModels] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const getModels = () =>{
        axios.get('https://autoapi.dezinfeksiyatashkent.uz/api/models')
        .then(res=>setModels(res.data.data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getModels()
    },[])
  return (
    <div className='model'>
      <div className='container model-container'>
        {
            <ul className='model-list'>
                <h1 className='model-title'>Model</h1>
                <h2 className='model-title'>Brand</h2>
            </ul>
        }
         {
            models && models.map((item,index)=>(
                <div key={index}>
                    <ul className='model-list'>
                        <h3 className='model-title-a'>{item.name}</h3>
                        <h4 className='model-title-b'>{item.brand_title}</h4>
                   </ul>
                </div>
            ))
         }
      </div>
    </div>
  )
}

export default Models
