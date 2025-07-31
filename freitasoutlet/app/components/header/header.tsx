'use client'

import { useRouter } from 'next/navigation'
import { Contact, Handbag, ShoppingCart, User } from 'lucide-react'
import Logo from '../../../public/Logo (8).png'

export default function Header() {
  const router = useRouter()

  const handleGoToProducts = () => {
    router.push('/products') // Pagina de Produtos
  }

  return (
    <>
      <header className="w-full h-[10rem] flex items-center bg-black text-white px-8">
        {/* Logo */}
        <img
          src={Logo.src}
          alt="Logo"
          className="w-[8rem] h-[6rem] cursor-pointer"
        />

        {/* Botão Produtos */}
        <button
          onClick={handleGoToProducts}
          className="ml-auto flex items-center gap-1 font-bold text-[1.2rem] hover:underline"
        >
          <Handbag />
          Produtos
        </button>

        {/* Botão Quem Somos */}
        <button className="ml-8 flex items-center gap-1 font-bold text-[1.2rem] hover:underline">
          <User />
          Quem Somos
        </button>

        {/* Botão Contato */}
        <button className="ml-8 flex items-center gap-1 font-bold text-[1.2rem] hover:underline">
          <Contact />
          Contato
        </button>

        {/* Botão Carrinho */}
        <button className="ml-8 flex items-center gap-1 font-bold text-[1.2rem] hover:underline">
          <ShoppingCart />
        </button>
      </header>

      {/* Linha divisória */}
      <div className="w-full h-[1px] bg-gray-500" />
    </>
  )
}
