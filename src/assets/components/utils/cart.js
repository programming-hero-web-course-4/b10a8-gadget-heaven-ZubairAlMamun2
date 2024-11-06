import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getAllcart=()=>{
    const data=localStorage.getItem("cart")
    if(data){
       const cart= JSON.parse(data)
       return cart;
    }
    else{
        return[]
    }
}

const getAllFav=()=>{
    const data=localStorage.getItem("fav")
    if(data){
       const fav= JSON.parse(data)
       return fav;
    }
    else{
        return[]
    }
}

//add
const AddCart=(product)=>{
    const cart=getAllcart()
    const isExist=cart.find(item=>item.product_id==product.product_id)
    if(isExist){
        return toast.warn("already exist in cart")
    }
    else{
        cart.push(product);
        localStorage.setItem("cart",JSON.stringify(cart))
        toast.success("product added to cart")
    }
}
const AddFav=(product)=>{
    const fav=getAllFav()
    const isExist=fav.find(item=>item.product_id==product.product_id)
    if(isExist){
        return toast.warn("already exist in wishlist")
    }
    else{
        fav.push(product);
        localStorage.setItem("fav",JSON.stringify(fav))
        toast.success("product added to wishlist")
    }
}

export{AddCart,AddFav}