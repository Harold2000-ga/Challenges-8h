import React from 'react'

export const PrevList = ({ listPresents, setPrev, setPrint }) => {
  const handlePrint = () => {
    const content = document.getElementById('list')
    setPrint(true)
    setTimeout(() => {
      window.print()
      setPrint(false)
    }, 50)
  }
  return (
    <div className='bg-[#e4e6e9] opacitiy-80 h-auto rounded-lg p-6  top-10 shadow-lg shadow-gray-400 fixed '>
      <ul id='list'>
        {listPresents.map(item => (
          <li key={item.id} className='p-2 '>
            <div className='flex items-start gap-4 '>
              {item?.image && (
                <img className='w-10 h-10 object-fill' src={item.image} alt='Image present' />
              )}
              <div className='flex flex-col items-start justify-center'>
                <p>{item.name} </p>
                <p className=' text-sm font-light'>{item.addressee}</p>
              </div>
              <p>{`(${item.amount})`}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex items-center justify-between w-full pt-2'>
        <button
          onClick={() => setPrev(false)}
          className='text-sm bg-gray-400 opacity-80 hover:opacity-100 hover:cursor-pointer py-1 px-2 mt-2 rounded-lg '
        >
          Close
        </button>
        <button
          onClick={handlePrint}
          className='text-sm bg-red-500 opacity-80 hover:opacity-100  hover:cursor-pointer py-1 px-2 mt-2 rounded-lg'
        >
          Print
        </button>
      </div>
    </div>
  )
}
