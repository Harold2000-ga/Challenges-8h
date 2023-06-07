import { FiDelete } from 'react-icons/fi'
import { BiEditAlt, BiDuplicate } from 'react-icons/bi'

export const List = ({
  listPresents,
  setListPresents,
  setEdit,
  setItemEdit,
  setAdd,
  setDuplicate,
}) => {
  const handleDelete = id => {
    const newList = listPresents.filter(item => id !== item.id)
    setListPresents(newList)
    localStorage.setItem('presents', JSON.stringify(newList))
  }

  const handleEdit = item => {
    setItemEdit(item)
    setEdit(true)
    setAdd(false)
  }
  const handleDuplicate = item => {
    setItemEdit(item)
    setEdit(false)
    setAdd(false)
    setDuplicate(true)
  }

  return (
    <div>
      <ul className='py-2'>
        {listPresents?.map(item => (
          <li key={item.id} className=' flex justify-between items-center my-4 '>
            <div className='flex items-start gap-4'>
              {item?.image && (
                <img className='w-10 h-10 object-fill' src={item.image} alt='Image present' />
              )}
              <div className='flex flex-col items-start justify-center'>
                <p>{item.name} </p>
                <p className=' text-sm font-light'>{item.addressee}</p>
              </div>
              <p>
                {item.amount > 1 && `(${item.amount})`}
                <p className='text-green-500'>{item.price && `$ ${item.price * item.amount}`}</p>
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <BiDuplicate
                size={20}
                color='gray'
                className='hover:cursor-pointer'
                onClick={() => handleDuplicate(item)}
              />
              <BiEditAlt
                onClick={() => handleEdit(item)}
                size={20}
                color='green'
                className='hover:cursor-pointer'
              />
              <FiDelete
                onClick={() => handleDelete(item.id)}
                size={20}
                color='red'
                className='hover:cursor-pointer'
              />
            </div>
          </li>
        ))}
      </ul>
      {listPresents?.length == 0 && <h1 className='p-4'> We don't have presents please add !!</h1>}
    </div>
  )
}
