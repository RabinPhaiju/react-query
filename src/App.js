import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { Homepage } from "./components/Homepage"
import { SuperHeros } from "./components/SuperHeros"
import { RQSuperHeros } from "./components/RQSuperHeros"
import "./App.css"

const queryClient = new QueryClient()

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
    </QueryClientProvider>
  )
}

export default App
