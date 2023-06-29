'use client'

import {Session} from 'next-auth'
import {signIn, signOut} from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Cart from './Cart'
import { useCartStore } from '@/store'
import {AiFillShopping} from "react-icons/ai"
import {motion, AnimatePresence} from "framer-motion"
import DarkLight from './DarkLight'

export default function Nav({user}: Session) {
    const cartStore = useCartStore()
    return(
        <nav className="flex justify-between items-center py-8 lg:py-12">
            <div className="flex items-center">
                <Link href={"/"} className="flex">
                    <h1 className='font-lobster text-3xl'>Blush.</h1>
                    <div className="h-8 border-r pr-4"></div>
                </Link>
                {/* {Dark mode} */}
                <motion.div
                    key="daiklight"
                    className="mx-6 text-sm justify-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1.5}}
                >
                    <DarkLight />
                </motion.div>
                <Link href={"/"} className="flex">
                    <motion.div
                        key="home"
                        className="mx-6 text-sm justify-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1.5}}
                    >
                    Home
                    </motion.div>
                </Link>
                <Link href={"/"} className="flex">
                    <motion.div
                        key="products"
                        className="mx-6 text-sm justify-center"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3, duration: 1.5}}
                    >
                        Products
                    </motion.div>
                </Link>
            </div>
            <ul className="flex items-center gap-8">
                {/* Toggle the cart */}
                <li onClick={() => cartStore.toggleCart()} className="flex items-center relative cursor-pointer">
                    <AiFillShopping size='1.5rem'/>
                    <AnimatePresence>
                        {cartStore.cart.length > 0 && ( 
                            <motion.span animate={{scale: 1}} initial={{scale: 0}} exit={{scale: 0}} className="bg-primary text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">
                                {cartStore.cart.length}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </li>
                {/* If the user is not sign In */}
                {!user && (
                    <li className="btn btn-primary text-white py-2 px-4">
                        <button onClick={() => signIn()}>Sign in</button>
                    </li>
                )}
                {user && (
                    <li>
                        <div className="dropdown dropdown-end cursor-pointer">
                            <Image src={user?.image as string} alt={user.name as string} width={36} height={36} className="rounded-full" tabIndex={0} />
                            <ul tabIndex={0} className="dropdown-content menu p-4 space-y-4 shadow bg-base-100 rounded-box w-72">
                                <Link className="hover:bg-base-300 p-4 rounded-md" href={'/dashboard'} onClick={() => {if(document.activeElement instanceof HTMLElement){
                                    document.activeElement.blur()
                                }}}>Orders</Link>
                                <li onClick={() => {
                                    signOut()
                                    if(document.activeElement instanceof HTMLElement){
                                    document.activeElement.blur()
                                }}} className="hover:bg-base-300 p-4 rounded-md" >Sign Out</li>
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
            <AnimatePresence>
                {cartStore.isOpen && <Cart />}
            </AnimatePresence>
        </nav>
    )
}