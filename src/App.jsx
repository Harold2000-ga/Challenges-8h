import { useEffect, useState } from 'react'
import { List } from './Components/List'
import { Add } from './Components/Add'
import { Edit } from './Components/Edit'
import { Duplicate } from './Components/Duplicate'
import { PrevList } from './Components/PrevList'

function App() {
  const [edit, setEdit] = useState(false)
  const [add, setAdd] = useState(false)
  const [duplicate, setDuplicate] = useState(false)
  const [prev, setPrev] = useState(false)
  const [itemEdit, setItemEdit] = useState({})
  const [listPresents, setListPresents] = useState([])
  const [print, setPrint] = useState(false)
  //Get from Local Storage
  useEffect(() => {
    const get = () => {
      const list = localStorage.getItem('presents')
      if (list.length == 0) {
        setListPresents([])
        return
      }
      setListPresents(JSON.parse(list))
    }
    get()
  }, [])

  //Delete all
  const handleDeleteAll = () => {
    setListPresents([])
    localStorage.setItem('presents', [])
  }

  return (
    <div
      className=' w-full h-screen bg-no-repeat bg-contain bg-center bg-red-200 flex items-center justify-center flex-col-reverse md:flex-row gap-6 p-4'
      style={{ backgroundImage: 'url(../src/assets/Navidad2.jpg)' }}
    >
      {(prev || add || edit || duplicate) && (
        <div
          className={`fixed top-0 left-0 w-full h-full ${
            print ? 'bg-white opacity-100' : 'bg-gray-700 opacity-60'
          }`}
        ></div>
      )}

      <div className='bg-[#e4e6e9] h-auto bg-opacity-80 max-w-[300px] md:max-w-[500px] w-full shadow-xl shadow-gray-500 rounded-xl py-10 px-4'>
        <button
          className=' bg-red-500 hover:bg-red-600 hover:cursor-pointer py-2 px-4 my-2 rounded-xl'
          onClick={() => setAdd(true)}
        >
          Add Present
        </button>
        <h1 className='text-2xl font-bold '>Presents</h1>
        <List
          listPresents={listPresents}
          setListPresents={setListPresents}
          setEdit={setEdit}
          setItemEdit={setItemEdit}
          setAdd={setAdd}
          setDuplicate={setDuplicate}
        />
        <button
          className='mx-auto w-1/3 block bg-gray-400 hover:bg-gray-500 hover:cursor-pointer p-1 mt-2 rounded-lg'
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
        <button
          type='button'
          className='mx-auto w-1/3 block bg-gray-400  hover:bg-gray-500 hover:cursor-pointer p-1 mt-2 rounded-lg'
          onClick={() => setPrev(!prev)}
        >
          Preview
        </button>
      </div>
      {add && <Add listPresents={listPresents} setListPresents={setListPresents} setAdd={setAdd} />}
      {edit && (
        <Edit
          setEdit={setEdit}
          listPresents={listPresents}
          setListPresents={setListPresents}
          itemEdit={itemEdit}
        />
      )}
      {duplicate && (
        <Duplicate
          listPresents={listPresents}
          setListPresents={setListPresents}
          itemEdit={itemEdit}
          setDuplicate={setDuplicate}
        />
      )}
      {prev && <PrevList listPresents={listPresents} setPrev={setPrev} setPrint={setPrint} />}
    </div>
  )
}

export default App