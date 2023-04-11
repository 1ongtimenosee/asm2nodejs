import instance from "./instance";
interface Iproduct {
    id:number,
    name:string,
    price:number,
}
const getAllProduct = () => {
    return instance.get('/products')
}
const getOneProduct = (id:number) => {
    return instance.get('/products/'+ id)
}
const deleteProduct = (id:number) => {
    return instance.delete('/products/'+ id)
}
const updateProduct = (product:Iproduct) => {
    return instance.put('/products/'+ product._id, product)
}
const addProduct = (product:Iproduct) => {
    return instance.post('/products', product)
}
export { getAllProduct, getOneProduct,deleteProduct,updateProduct,addProduct}