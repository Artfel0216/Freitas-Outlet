import Clothing from '../../../public/clothing.png';

export default function Header() {
    return (
    <>
    <header className='w-full h-[8rem] flex items-center text-black'>
        <img src={Clothing.src} alt="" className='w-[10rem] h-[10rem] cursor-pointer'/>
        <button className='cursor-pointer font-bold text-[1.2rem] ml-[45rem] hover:underline'>Produtos</button>
        <button className='cursor-pointer font-bold text-[1.2rem] ml-[3rem] hover:underline'>Quem Somos</button>
        <button className='cursor-pointer font-bold text-[1.2rem] ml-[3rem] hover:underline'>Contato</button>
    </header>
    </>
    )
}