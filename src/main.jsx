import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Aluno from './routes/Aluno.jsx'
import Home from './routes/Home.jsx'


{/*criando a funçao createbrowserrouter */ }

const router = createBrowserRouter([{
  //chamando os elementos pai 
  path: '/', element: <App />,
  errorElement: <Error />,

  /*chamando os elementos filhos */
  children: [
    { path: '/', element: <Home /> },
    {path: '/aluno', element:<Aluno/>}

  ]

}])











createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*criando o props q sera renderizado*/}
    <RouterProvider router={router} />
  </StrictMode>,
)
