import { Snowfall } from './Snowfall'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const SnowfallContainer = () => {
  let snowflakes = []

  for (let i = 0; i < 30; i++) {
    const x = randomInt(0, window.innerWidth)
    const y = randomInt(0, window.innerHeight)

    snowflakes.push(<Snowfall key={i} x={x} y={y} />)
  }

  return <div className='fixed inset-0 '>{snowflakes}</div>
}
