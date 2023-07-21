import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "../Store"
import posthog from 'posthog-js'


import Home from "../Pages/Home"

function App() {
  
  posthog.init('phc_dkTb8A3vzQILwk26wUJ7vSSJ5zUgVnyGqVNbmba1O7a', { 
    api_host: 'https://app.posthog.com' 
  })
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;