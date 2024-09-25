import Image from "next/image";

import perfil from "../img/perfil.png";
import home from "../img/casa.png";
import lupa from "../img/lupa.png";
import favoritos from "../img/favoritos.png";
import warrior from "../img/warrior.png";

// import wifi from "../img/wi-fi (1).png";
// import bateria from "../img/bateria-fraca.png";
// import sinal from "../img/barras-de-sinal.png";

export default function Home() {
  return (
    <div className="bg-scroll bg-right bg-[url('../img/warriorFundo.avif')] text-white bg-cover h-screen">
      {/* <header className="bg-black flex justify-between p-2">
        <span className="text-white ml-10">17:00</span>
        <div className="flex">
          <Image src={wifi} alt="wifi"/>
          <Image src={sinal} alt="sinal"/>
          <Image src={bateria} alt="bateria"/>
          </div>
          </header> */}

      <header>  
        <div className="flex items-center justify-between p-5">
          <h1>MAX</h1>
          <Image src={perfil} alt="perfil" className="h-10 w-10"/>
        </div>
        <div className="flex p-5 gap-8 text-nowrap flex-wrap">
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>HBO</span>
          <span>New & Notices</span>
        </div>
      </header>

      <main className="mt-80 bg-black">
        <div className="flex justify-center items-center flex-col">
          <Image src={warrior} alt="warrior" className="w-1/2"/>
          <span className="w-1/2 text-center">2019 </span>
          <span className="w-1/2 text-center">Um drama intenso que acompanha diferentes famílias do crime organizado na Chinatown de San Francisco no século XIX.</span>
        </div>
        <div className="flex gap-2 justify-center p-4">
          <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
          <div className="h-1.5 w-1.5 bg-zinc-400 rounded-full"></div>
        </div>
      </main>

      <footer className="fixed bottom-0 bg-black/50 flex w-full justify-around p-8">
          <Image src={home} alt="home" className="h-8 w-8"/>
          <Image src={favoritos} alt="favoritos" className="h-8 w-8"/>
          <Image src={lupa} alt="lupa" className="h-8 w-8"/>
      </footer>
    </div>
  );
}
