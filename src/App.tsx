import { Button } from "./components/ui/button"

function App(){
  return(
    <div className="bg-slate-900 flex flex-col items-center justify-center h-screen w-full">
        <div className="bg-slate-700 w-96 h-96 flex items-center justify-center gap-5 flex-col rounded-md shadow">
            <Button className="w-32">Registar</Button>
            <Button className="w-32">Entrar</Button>
        </div>
    </div>
  )
}

export default App