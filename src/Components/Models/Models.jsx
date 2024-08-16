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
                   
                </div>
            ))
         }
      </div>
    </div>
  )
}

export default Models
