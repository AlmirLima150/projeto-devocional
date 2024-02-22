import logo from "./assets/logo-simbolo.svg";


export function App() {
  

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">

      <div className="flex flex-1 items-center gap-2 justify-center">
      
        <img className="size-12" src={logo} alt="logo betania" />
        <h1 className="text-3xl font-bold text-red-50  ">Devocionais</h1>

      </div>

      <div className="flex items-center">
        <form className="w-full">
          
          <input 
            type="text" 
            placeholder="Busque em seus devocionais..." 
            className="w-full bg-transparent text-2xl font-semibold tracking-tight outline-none placeholder:text-red-50 "
            />
        
        </form>
      </div>

    </div>
  )
}


