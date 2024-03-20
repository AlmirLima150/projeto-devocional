import logo from "./assets/logo-simbolo.svg";
import { CarDevocional } from "./components/card-devocional";



export function App() {
  

  return (
    <div className="mx-auto my-12 max-w-7xl space-y-6">

      <div className="flex flex-1 items-center gap-2 justify-center">
      
        <img className="size-12" src={logo} alt="logo betania" />
        <h1 
        className="text-3xl font-bold">
          Devocionais
        </h1>

      </div>

      
      <form className="w-full flex">
        
        <input 
          type="text" 
          placeholder="Busque em seus devocionais..." 
          className="w-full px-2 bg-red-50/20 rounded-lg text-2xl font-semibold tracking-tight outline-none placeholder:text-white"
          />
 
      </form>
      
      <div className="grid grid-cols-4 gap-3 auto-rows-[300px]">
          
      </div>

    </div>
  )
}


