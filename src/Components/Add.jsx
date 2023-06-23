import { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Gifts = [
  'Candy',
  'Flip-Flop',
  'Chocolate',
  'Teddy-Bear',
  'Rainbow',
  'Ice-Cream',
  'Snickers',
  'Cereal',
  'Money',
  'Donkey',
]
export const Add = ({ listPresents, setListPresents, setAdd }) => {
  const [randomGift, SetRandomGift] = useState('')
  //Add item
  const handleSubmit = e => {
    e.preventDefault()
    //Get form
    const name = e.target.name.value
    const cant = e.target.number.value
    const image = e.target.image.value
    const addressee = e.target.addressee.value
    const price = e.target.price.value
    //Validate if no empty
    if (name == '') return alert('Cant be added a empty present')
    // If the present already exist add amount
    if (listPresents.filter(item => item.name === name).length > 0) {
      const AddList = listPresents.map(item => {
        if (item.name === name) {
          const newItem = { ...item, amount: item.amount + parseInt(cant) }
          return newItem
        } else {
          return item
        }
      })
      //Update
      setListPresents(AddList)
      localStorage.setItem('presents', JSON.stringify(AddList))
      setAdd(false)
      return
    }
    //Create new Present
    let maxId = 0
    if (listPresents.length > 0) {
      const arrayId = []
      listPresents.map(item => {
        arrayId.push(item.id)
      })
      maxId = arrayId.reduce((a, b) => {
        return a > b ? a : b
      })
    }
    const newPresent = {
      id: maxId + 1,
      name,
      amount: parseInt(cant),
      image,
      addressee,
      price,
    }
    localStorage.setItem('presents', JSON.stringify([...listPresents, newPresent]))
    setListPresents([...listPresents, newPresent])
    setAdd(false)
  }
  const handleRand = () => {
    const newGift = Gifts[Math.floor(Math.random() * 10)]
    SetRandomGift(newGift)
  }
  return (
    <div className='bg-[#e4e6e9] bg-opacity-80 w-[300px] z-20 relative shadow-xl shadow-gray-500 rounded-xl py-10 px-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold  mb-4'>New Present</h1>

        <AiFillCloseCircle
          size={25}
          color='#EF4444'
          className='opacity-70 hover:cursor-pointer hover:opacity-90'
          onClick={() => setAdd(false)}
        />
      </div>
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label className='text-light text-sm'>Gift</label>
          <div className='flex justify-between'>
            <input
              className='bg-slate-300 rounded-lg p-2'
              name='name'
              type='text'
              placeholder='Candy'
              defaultValue={randomGift}
            />
            <button
              type='button'
              onClick={handleRand}
              className='p-2 bg-slate-400 hover:bg-slate-600 rounded-xl'
            >
              Rand
            </button>
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='text-light text-sm'>Address</label>
          <input
            className='bg-slate-300 rounded-lg p-2'
            name='addressee'
            type='text'
            placeholder='Harold'
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-light text-sm'>Url image</label>
          <input
            className='bg-slate-300 rounded-lg p-2'
            name='image'
            type='text'
            placeholder='https:/image.....'
          />
        </div>
        <div className='flex w-full gap-4'>
          <div className='flex flex-col'>
            <label className='text-light text-sm'>Amount</label>
            <input
              className='bg-slate-300 w-full rounded-lg p-2'
              name='number'
              type='number'
              placeholder='0'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-light text-sm'>Price</label>
            <input
              className='bg-slate-300 w-full rounded-lg p-2'
              step='any'
              name='price'
              type='number'
              placeholder='0'
            />
          </div>
        </div>
        <input
          className='ml-2 bg-green-500 opacity-80 hover:opacity-100 hover:cursor-pointer rounded-xl px-3 py-1'
          type='submit'
          value='Send'
        />
      </form>
    </div>
  )
}
