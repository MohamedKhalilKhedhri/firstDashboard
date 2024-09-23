import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-col  gap-6 rounded-md bg-base-100 p-5'>
                
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-3'>
                            <p className='text-xl text-gray-500'>{props.title}</p>
                            <h1 className='font-bold text-4xl'>{props.number}</h1>
                    </div>
                   {props.svg}
                </div>

                <div className='flex gap-1 items-center'>
                   {props.up ? (
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-5 h-5 fill-accent'><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"/></svg>
                    <p className=''><span className='text-accent'>{props.percentage}</span> {props.text}</p>
                    </>
                   ) :
                   
                   <>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-5 h-5 fill-error' style={{transform:"rotateX(180deg)"}}><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"/></svg>
                   <p className=''><span className='text-error'>{props.percentage}</span> {props.text}</p>
                   </>
                   }
                   
                </div>
        </div>
  )
}

export default Card