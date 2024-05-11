import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () => {
  return (
    <div className='relative'>
      <FontAwesomeIcon icon={faCartShopping} className='text-[21px]' />
      <span className='bg-red-500 flex justify-center items-center rounded-full font-[600] w-[22px] h-[22px] absolute bottom-[18px] left-[17px] text-[14px]'>10</span>
    </div>
  )
}

