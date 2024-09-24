import React from 'react'
import Card from '../Components/Cards/Card'
import AChart from '../Components/Charts/Achart'

function Dashboard() {
    const svg1 =  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='h-12 w-12 fill-primary'><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
    const svg2 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-12 h-12 fill-warning'><path d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z"/></svg>
    const svg3 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-12 h-12 fill-success'><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
    const svg4 =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-12 h-12 fill-error'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
    
  return (
    <>
        <div className=' lg:pl-64 mt-16'>
            <div className='md:p-16 px-4 py-10 bg-base-200 overflow-x-hidden overflow-y-auto w-full' style={{height:"calc(100vh - 4rem)"}}>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <div className='grid w-full lg:grid-cols-3 xl:grid-cols-4  flex-wrap gap-3 mt-4'>
                    <Card title={"Total User"} number={"40,689"} text={"Up from past Week"} percentage={"83%"} svg={svg1} up={true} />
                    <Card title={"Total Order"} number={"10293"} text={"Up from Yesterday"} percentage={"1.3%"} svg={svg2} up={true} />
                    <Card title={"Total Sales"} number={"89,000"} text={"Down from Yesterday"} percentage={"4.3%"} svg={svg3} up={false} />
                    <Card title={"Total Pending"} number={"2040"} text={"Up from Yesterday"} percentage={"1.8%"} svg={svg4} up={true} />
                    
                </div>
                <h1 className='mt-10 text-4xl font-bold'>Analytics</h1>
                <div className='mt-16'>
                <AChart />
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard