import { Facebook, Instagram } from "lucide-react";

export default function Descont() {
    const bandeiraBrasil = "\uD83C\uDDE7\uD83C\uDDF7";
    
    return(
        <div className="w-full h-[1.5rem] bg-black text-white font-bold flex gap-[1rem] items-center p-4">
            <a href="https://www.instagram.com/freitasoutlet07.oficial/">
                <Instagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61568295973747&locale=pt_BR">
                <Facebook />
            </a>
           <p className=" ml-[23rem]">Frete Grátis para todo o Brasil nas compras acima de R$ 199,99 🚚 {bandeiraBrasil}</p>
        </div>
     
    )
}