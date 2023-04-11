import instance from "./instance";
interface Icategory{
    id:number,
    name:string,
}
const getAllCategory= () => {
    return instance.get('/category')
}
const getOneCategory = (id:number) => {
    return instance.get('/category/'+ id)
}
const deleteCategory = (id:number) => {
    return instance.delete('/category/'+ id)
}
const updateCategory = (category:Icategory) => {
    return instance.put('/category/'+ category.id, category)
}
const addCategory = (category:Icategory) => {
    return instance.post('/category', category)
}
export { getAllCategory, getOneCategory,deleteCategory,updateCategory,addCategory}