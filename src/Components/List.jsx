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
    setDuplicate(false)
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
              {item?.image ? (
                <img className='w-10 h-10 object-fill' src={item.image} alt='Image present' />
              ) : (
                <img
                  className='w-10 h-10 object-fill'
                  src='data:image/jpeg;base64,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'
                  alt='Image present'
                />
              )}
              <div className='flex flex-col items-start font-semibold justify-center'>
                <p>{item.name} </p>
                <p className=' text-sm font-normal'>{item.addressee}</p>
              </div>
              <div className='flex items-center flex-col justify-center'>
                <p>{item.amount > 1 && `(${item.amount})`}</p>
                <p className='text-sm font-normal text-green-700'>
                  {item.price && `$${(item.price * item.amount).toFixed(2)}`}
                </p>
              </div>
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
      {listPresents?.length == 0 && <h1 className='p-4'> We don't have presents, please add !!</h1>}
    </div>
  )
}
