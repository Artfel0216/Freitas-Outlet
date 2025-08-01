import { ChevronDown } from 'lucide-react'
import Logot from '../../../public/Logo (8).png'

export default function HeaderProducts(){
    return(
     <header className=' flex items-center p-8'>
        <img 
        src={Logot.src}
        alt=""
        className='w-[8rem] h-[6rem] cursor-pointer'/>

        <button className='flex text-[1.2rem] items-center gap-2 font-bold ml-[45rem] text-white cursor-pointer hover:text-gray-400'>
            Masculinos 
            <ChevronDown />
        </button>

        <button className='flex text-[1.2rem] items-center gap-2 font-bold ml-[3rem] text-white cursor-pointer hover:text-gray-400'>
            Femininos 
            <ChevronDown />
        </button>

        <button className='flex text-[1.2rem] items-center gap-2 font-bold ml-[3rem] text-white cursor-pointer hover:text-gray-400'>
            Infantis 
            <ChevronDown />
        </button>
     </header>
    )
}