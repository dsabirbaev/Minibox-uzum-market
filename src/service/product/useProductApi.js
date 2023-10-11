import api from "../axios";

const useProductApi = {
    getAll: ()=> api.get("/products"),
    getOneItem: (slug)=> api.get(`/products?slugify=${slug}`),
    addToCartFunc: (data) => api.post(`/cart`, data),
    getAllProductsFromCart: () => api.get("/cart"),
    deleteCartProduct: (id)=> api.delete(`/cart/${id}`)
}


export default useProductApi;