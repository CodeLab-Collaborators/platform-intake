
import { RouterProvider } from "react-router-dom"
import { mainRoute } from './routes/mainRoute'
import { GlobalProvider } from "./global/GlobalProvider"
const App = () => {
  return (
    <div>
      <GlobalProvider>
        <RouterProvider router={mainRoute} />
      </GlobalProvider>
    </div>
  )
}

export default App