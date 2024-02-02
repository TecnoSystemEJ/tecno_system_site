import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({ name }) => {
    return (
        <div className='border border-primary-main w-90 h-36 rounded-xl mt-10'>
            <div className='flex gap-2 items-center ml-2 mt-4 w-80'>
                <div className='flex flex-col items-center justify-center'>

                    <div className='border border-primary-main rounded-full w-20 h-20'>
                    <Image
                    src="/Elipse.svg"
                    width={80}
                    height={80}
                    alt="Star"
                    />
                    </div>
                    <div className='flex items-start gap-1 h-6 mt-1'>
                    <Image
                    src="/Star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                    />
                     <Image
                    src="/Star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                    />
                    
                    <Image
                    src="/Star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                    />
                    <Image
                    src="/Star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                    />
                      <Image
                    src="/Star.svg"
                    width={44}
                    height={44}
                    alt="Star"
                    />
                    
                    </div>
                </div>

                <div>
                    <h3 className='text-sm text-primary-main uppercase font-semibold'>{name}</h3>
                    <p className='text-xs font-semibold uppercase'>Com base em São Paulo, e escritórios na Espanha e Portugal, temos uma atuação internacional. Nossa paixão </p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
