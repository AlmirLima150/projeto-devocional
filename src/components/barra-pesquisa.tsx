import { CalendarDays, Calendar } from "lucide-react";

export function BarraPesquisa(){

    return(

        <div className="flex items-center">
            <form className="w-full">
            
            <input 
                type="text" 
                placeholder="Busque em seus devocionais..." 
                className="w-full bg-transparent text-2xl font-semibold tracking-tight outline-none placeholder:text-red-50 "
                />
            
            </form>
        
            <div className="flex flex-initial text-red-50">
                <button className="size-10">
                    <Calendar />
                    <CalendarDays />
                </button>
                

            </div>

        </div>
    )
}