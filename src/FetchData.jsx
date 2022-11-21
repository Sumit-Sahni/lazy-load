import React from 'react'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState } from 'react'
import LazyLoad from  'react-lazyload'
const FetchData = () => {
     
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        const getData = async () => {
             await axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res)=>{
                console.log(res)
                setUsers(res.data)
            }).catch((err)=>{
                console.log(err)
            })
         }
         getData()

          return () =>{
            console.log("Removed")
            getData()
          }
    },[])
    
    
 


  return (
    <>
       
       {
         users.map((item,index )=>{
            return(
                <div key={index} className='md:w-80 lg:w-[23rem]   h-auto rounded border border-black-900 my-2 mx-auto flex flex-col'>
                        <LazyLoad 
                          offset={100}
                          height={200} 
                        >
                        <div className='' >
                           <LazyLoadImage
                            effect='blur'
                            className=' ' src={`https://avatars.dicebear.com/api/bottts/${item.name}.svg`} alt={item.name}
                            width = '100%'
                            height= '100%'
                            />
                       </div>
                       <div className=' p-6'>
                            <h1>Name :- {item.name}/month</h1>
                            <h1 className='font-semibold'>Email:- {item.email}</h1>
                            <h1>Phone:- {item.phone}</h1>
                            <hr className='bg-blue-500 my-2'></hr>

                           <div>
                               <h1>Street:- {item.address.street}</h1>
                           </div>
                       </div>
                       <div>
                       </div>
                        </LazyLoad>
                      
                </div>
             )
         })
       }
    </>
   
  )
}

export default FetchData