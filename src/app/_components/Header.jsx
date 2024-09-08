'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { useUser, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

function Header() {
    const { isSignedIn } = useUser();

    return (
        <div className='p-5 flex justify-between items-center border shadow-sm'>
            <Link href='/'>
                <Button 
                    variant='' 
                    className='flex items-center gap-1 p-0 m-0 bg-transparent border-none hover:bg-transparent focus:ring-0 active:ring-0 transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                    <Image src={'/chart-donut.svg'} alt='logo' width={45} height={50}/>
                    <span className='text-blue-800 font-extrabold text-3xl'>
                        MoolaMaster
                    </span>
                </Button>
            </Link>
            {isSignedIn ? (
                <div className='flex gap-3 items-center'>
                    <Link href='/dashboard'>
                        <Button 
                            variant='outline' 
                            className='rounded-full transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Dashboard
                        </Button>
                    </Link> 
                    <UserButton /> {/* Shows user options when signed in */}
                </div>
            ) : (
                <div className='flex gap-3 items-center'>
                    <Link href='/dashboard'> {/* Dashboard for non-signed-in users */}
                        <Button 
                            variant='outline' 
                            className='rounded-full transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Dashboard
                        </Button>
                    </Link> 
                    <Link href='/sign-in'> {/* Get Started links to sign-in/sign-up page */}
                        <Button 
                            className='rounded-full transition-transform duration-300 ease-in-out transform hover:-translate-y-1'>
                            Get Started
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header;
