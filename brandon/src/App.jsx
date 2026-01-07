import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Notfound } from "./pages/notfound"
function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>} />
    <Route path="*"element={<Notfound/>}/>
   </Routes>
   </BrowserRouter>

</>
  )
}

export default App
