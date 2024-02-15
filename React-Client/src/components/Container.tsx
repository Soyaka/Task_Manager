
import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'
function Container() {
  return (
    <div className='flex items-center gap-8 p-6  bg-zinc-900 text-white '>
        <LeftContainer/>
        <MainContainer/>
    </div>

  )
}

export default Container