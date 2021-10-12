import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query" // Added react-query
import { ReactQueryDevtools } from "react-query/devtools" // Added react-query devtools
import { Homepage } from "./components/Homepage"
import { SuperHeros } from "./components/SuperHeros"
import { RQSuperHeros } from "./components/RQSuperHeros"
import "./App.css"

const queryClient = new QueryClient() // Added react-query

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/super-heroes'>
              <SuperHeros />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeros />
            </Route>
            <Route path='/'>
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider> // Added react-query
  )
}

export default App
