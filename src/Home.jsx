// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import Itemcart from './itemcart'

// function App() {
//   let [count,setcount]=useState(0)
//   let [cart, setcart] = useState([
//     {
//         phone: 'https://images.samsung.com/pk/smartphones/galaxy-s23/images/galaxy-s23-highlights-color-back-lavender-s.jpg',
//         name: "Samsung Galaxy S23",
//         price: 1200
//     },
//     {
//         phone: 'https://lh3.googleusercontent.com/RCpAMtM9AnLkN7ieohtKg8-alFDueYDu6MzF_0URz1pubadrK7jmAnKU_aBv8j5dre7m9iJ_ZgOrSlYJWWUzB7kZ1srvA2qwce4',
//         name: "Google Pixel 8 ",
//         price: 900

//     },
//     {
//         phone: 'https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-14-Pro-Max-128GB-Deep-Purple_b46ed667-9c6b-46ae-9ba8-354c022748e8.91311ac5a801f617a7cbf901a4f4b81d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
//         name: "IPhone 14 Pro",
//         price: 900
//     },
//     {
//         phone: 'https://www.digitaltrends.com/wp-content/uploads/2023/07/OnePlus-12-5K1.jpg?p=1',
//         name: "One Plus 12 ",
//         price: 1000
//     }
// ])
//   let [expense,setexpense]=useState(4000)

//   function inc(itemprice,i){
//     setcount(count[i]+1)
//     setexpense(expense+itemprice)
//   }
//   function dec(itemprice,i){
//     setcount(count[i]-1)
//     setexpense(expense-itemprice)
//   }
//   function del(i){
//     let update=[...cart]
//     update.splice(i,1)
//     setcart(update)
//     setexpense(expense-cart[i].price)
//   }
//   function delall(){
//     setcart([])
//     setexpense(0)
//   }
//  l
 

//   return (
//     <>
//       <h1>CART</h1>
//             <div>
//                 <p>${expense}</p>
//             </div>
//             <button onClick={delall}>
//                 REMOVE ALL
//             </button>
//             <div>

//             </div>
//             <div>
//                 {cart.map((item, i) => {
//                     return (
//                        <Itemcart {...item}
//                        ondelete={()=>del(i)}
//                        oninc={()=>inc(item.price)}
//                        ondec={()=>dec(item.price)}
//                        ondelall={delall}
                       

                       
                       
//                        />
//                     )
//                 })}

//             </div>
//     </>
//   )
// }

// export default App
// // import React, { useState } from "react";
// function Itemcart({name,phone,price,oninc,ondec,ondelete,count}) {

//     console.log(name);
    

//     return (
//         <>
           

            
//             <div>
                
                    
//                         <div style={{ width: '45%', border: '1px solid', borderRadius: '10px', margin: 'auto' }}>
//                             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                                 <div>
//                                     <img style={{ height: '50px', width: '50px' }} src={phone} alt="" />
//                                     <p>{name}</p>
//                                     <p>${price}</p>
//                                     <button onClick={ondelete}>
//                                         Remove Item
//                                     </button>

//                                 </div>

//                             </div>
//                             <div>
//                                 <button onClick={oninc}>
//                                     +

//                                 </button>
//                                 <span>{count}</span>
//                                 <button onClick={ondec}>
//                                     _

//                                 </button>
//                             </div>
//                         </div>
                    
                

//             </div>

//         </>
//     )
// }
// export default Itemcart