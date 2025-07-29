import { Contact, Handbag, ShoppingCart, User } from 'lucide-react';
import Logo  from '../../../public/Logo (8).png';

export default function Header() {
    return (
    <>
    <header className='w-full h-[10rem] flex items-center text-white bg-black'>
        <img src={Logo.src} alt="" className='w-[10rem] h-[8rem] ml-[2rem] cursor-pointer'/>

        <button className='cursor-pointer font-bold text-[1.2rem] ml-[40rem] hover:underline flex gap-1 items-center'>
            <Handbag />
            Produtos
        </button>  

        <button className='cursor-pointer font-bold text-[1.2rem] text-white flex gap-1 hover:underline items-center ml-[2rem]'>
        <User />
        Quem Somos 
        </button>   

        <button className='cursor-pointer font-bold text-[1.2rem] text-white flex gap-1 hover:underline items-center ml-[2rem]'>
        <Contact />
        Contato 
        </button>  

        <button className='cursor-pointer font-bold text-[1.2rem] text-white flex gap-1 hover:underline items-center ml-[2rem]'>
            <ShoppingCart /> 
        </button>  
    </header>

    <div className='w-full h-[1px] bg-gray-500'></div>
    </>
    )
}