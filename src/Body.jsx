// import React from 'react'

import { useEffect, useState } from "react"





export const Body = () => {

    const [data, setData] = useState([])
    const [isLoaded, setIsloaded] = useState(false);

    const callApi =  () => {
        
       fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        response.json()
       }).then(()=>{
           const resData =  response.json()
       }).then((resData)=>{
           setData(resData)
           setIsloaded(true)
       }).catch((err)=>{
        console.log("err",err)
       })

    }

    // useEffect(() => {
    //     console.log("data", data)
    // }, [data])

    useEffect(()=>{
        setTimeout(()=>{
            callApi()
        },3000)
        
    },[])


    // useEffect(()=>{
    //     setTimeout(()=>{
    //         callApi()
    //     },3000)
        
    // })

    return (
        <>
            <div className="">
            
       {isLoaded?  <table class="table">
            <thead>
                <tr>
                    <th scope="col">S.no</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item,index)=>{
                    return (
                        <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
                    )
                })}
                
                
            </tbody>
            </table> : "loading..."}

                </div>
           

        </>
    )
}

