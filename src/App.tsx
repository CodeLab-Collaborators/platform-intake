
import { RouterProvider } from "react-router-dom"
import { mainRoute } from './routes/mainRoute'
import { GlobalProvider } from "./global/GlobalProvider"
import { useEntry } from "./hooks/useStart"


const App = () => {
  useEntry()

  return (
    <div>
      <GlobalProvider>
        <RouterProvider router={mainRoute} />
      </GlobalProvider>
    </div>
  )
}

export default App