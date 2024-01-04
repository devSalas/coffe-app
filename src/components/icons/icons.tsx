type Props={
     color:boolean
}

import {useState,useContext, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'





export const HomeIcon =()=>{
    const pathname = usePathname()
    const [color,setColor] = useState(false)
    useEffect(()=>{
    if(pathname == "/"){
        setColor(true)
    }else{
        setColor(false)
    }
    },[pathname])
    return(
        <div className="flex flex-col justify-center items-center "> 
        <Link href={"/"}>
            <svg  xmlns="http://www.w3.org/2000/svg"  className={`${color? "stroke-third":"stroke-fourth"} ${color? "fill-third":""}`} width="24" height="24" viewBox="0 0 24 24" ><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
            <div className="text-xs font-extralight">Home</div>
        </Link>
       
    </div>
    )
}

export const HeartIcon =()=>{
    const pathname = usePathname()
    const [color,setColor] = useState(false)
    useEffect(()=>{

    if(pathname == "/favorite"){
        setColor(true)
    }else{
        setColor(false)
    }
    },[pathname])


    return(
        <div className="flex flex-col justify-center items-center">
            <Link href={"/favorite"}>
                <svg   className={`${color? "stroke-third":"stroke-fourth"} ${color? "fill-third":""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="white"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                <div className="text-xs font-extralight">whistlist</div>
            </Link>
        </div>
    )
}

export const CartIcon =()=>{
    const pathname = usePathname()
    const [color,setColor] = useState(false)
    useEffect(()=>{

    if(pathname == "/cart"){
        setColor(true)
    }else{
        setColor(false)
    }
    },[pathname])
    return(
        <div className="flex flex-col justify-center items-center">
            <Link href={"/cart"}>
                <svg  className={`${color? "stroke-third":"stroke-fourth"} ${color? "fill-third":""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" stroke="white"  ><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                <div className="text-xs font-extralight">Cart</div>
            </Link>
            

        </div>
    )
}


export const AccountIcon =()=>{
    const pathname = usePathname()
    const [color,setColor] = useState(false)
    useEffect(()=>{

    if(pathname == "/account"){
        setColor(true)
    }else{
        setColor(false)
    }
    },[pathname])
    return(
        <div className="flex flex-col justify-center items-center">
            <Link href={"/account"}>
                <svg  className={`${color? "stroke-third":"stroke-fourth"} ${color? "fill-third":""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="" stroke="white"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                <div className="text-xs font-extralight">Account</div>
            </Link>
        </div>
    )
}


export function  LeftArrow() {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='fill-fourth' viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-5v4l-5-5 5-5v4h5v2z"></path></svg>
    )
}
