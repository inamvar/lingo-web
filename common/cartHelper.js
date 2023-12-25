import {pushAlert} from "./notifier";

export const cartExists=()=>{
  if(typeof window !== 'undefined' && window.sessionStorage.getItem('lingo_cart')){
    return true;
  }
  else{
      return false;
  }
};
export const addToCart=(id,title,price)=>{

  if (cartExists()){
   let oldCart= getCart();
   if (oldCart==null){
       let cart=[];
       cart.push({
           id,title,price
       });
       let stringedCart= JSON.stringify(cart);
       window.sessionStorage.setItem('lingo_cart',stringedCart);
       console.log(getCart());
   }
   else
   {
    oldCart.push({id,title,price});
       let stringedCart= JSON.stringify(oldCart);
       window.sessionStorage.setItem('lingo_cart',stringedCart);
       console.log(getCart());
   }
  }
  else{
      let cart=[];
      cart.push({
          id,title,price
      });
    let stringedCart= JSON.stringify(cart);
      window.sessionStorage.setItem('lingo_cart',stringedCart);
      console.log(getCart());
  }
};


export const getCart=()=>{
    if (cartExists()){
        let stringedCart= window.sessionStorage.getItem('lingo_cart');
       return  JSON.parse(stringedCart);
    }
    else{
        return null;
    }
};
export const removeFromCart=(id)=>{
        if(cartExists())
        {

       let cart= getCart();
           let item= cart.find((x)=>x.id==id);
           console.log(item);
       if (item) {
         cart= cart.filter((x)=>x.id!=id);
         if (cart.length==0){
             window.sessionStorage.removeItem('lingo_cart');
         }
         else{
             let stringedCart= JSON.stringify(cart);
             window.sessionStorage.setItem('lingo_cart',stringedCart);
         }

         return true;
        }
        }
        return false;
}
export const  clearCart=()=>{
    if(cartExists())
    {
        window.sessionStorage.removeItem('lingo_cart');
        return true;
    }
    else{
        return false;
    }
}