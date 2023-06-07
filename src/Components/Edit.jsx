import { AiFillCloseCircle } from 'react-icons/ai'

export const Edit = ({ itemEdit, listPresents, setListPresents, setEdit }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const updatedPresent = {
      id: itemEdit.id,
      name: e.target.name.value,
      addressee: e.target.addressee.value,
      amount: JSON.parse(e.target.number.value),
      image: e.target.image.value,
      price: itemEdit.price,
    }
    const newList = listPresents.map(item => {
      if (item.id === itemEdit.id) {
        return updatedPresent
      }
      return item
    })
    setListPresents(newList)
    localStorage.setItem('presents', JSON.stringify(newList))
    setEdit(false)
  }

  return (
    <div className='bg-[#e4e6e9] bg-opacity-80 w-[300px] relative  shadow-xl shadow-gray-500 rounded-xl py-10 px-4'>
      <div className='flex items-center justify-between mb-5'>
        <h1 className='text-xl font-bold  mb-4'>Update Present</h1>
        <AiFillCloseCircle
          size={25}
          color='#EF4444'
          className='opacity-70 hover:cursor-pointer hover:opacity-90'
          onClick={() => setEdit(false)}
        />
      </div>{' '}
      <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
        <input
          className='bg-slate-300 rounded-lg p-2'
          name='name'
          type='text'
          placeholder='Candy'
          defaultValue={itemEdit.name}
        />
        <input
          className='bg-slate-300 rounded-lg p-2'
          name='addressee'
          type='text'
          placeholder='Addressee'
          defaultValue={itemEdit.addressee}
        />
        <input
          className='bg-slate-300 rounded-lg p-2'
          name='image'
          type='text'
          placeholder='https:/image.....'
          defaultValue={itemEdit.image}
        />
        <input
          className='bg-slate-300 rounded-lg p-2'
          name='number'
          type='number'
          placeholder='0'
          defaultValue={itemEdit.amount}
        />
        <input
          className='ml-2 bg-green-500 opacity-80 hover:opacity-100 hover:cursor-pointer rounded-xl px-3 py-1'
          type='submit'
          value='Send'
        />
      </form>
    </div>
  )
}
