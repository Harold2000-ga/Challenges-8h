export const Snowfall = ({ x, y }) => {
  return (
    <div className='fixed inset-0 '>
      <div
        className='absolute w-4 h-4 bg-copo-de-nieve rounded-full animate-snowfall'
        style={{ top: y, left: x }}
      />
    </div>
  )
}
