import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const UpdateProductPage = (props) => {
  const {id} = useParams()
  const {register,handleSubmit,reset} = useForm()
  useEffect(()=>{
    const currentProduct = props.products.find((product)=>product._id ==String(id))
    reset (currentProduct)
  },[props])
  const onHandleSubmit = data =>{
    console.log(data);
    
    props.onUpdate(data)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
      <input type="text" {...register('name')}/>
      <input type="text" {...register('price')}/>
      <input type="text" {...register('image')}/>
      <input type="text" {...register('description')}/>
      <input type="text" {...register('categoryId')}/>
      <button type='submit'>Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProductPage