import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query" // Added react-query
import { ReactQueryDevtools } from "react-query/devtools" // Added react-query devtools
import { Homepage } from "./components/Homepage"
import { SuperHeros } from "./components/SuperHeros"
import { RQSuperHeros } from "./components/RQSuperHeros"
import { RQSuperHeroOnClick } from "./components/RQSuperHeroOnClick"
import "./App.css"
import { UseHookSuperHeros } from "./components/UseHookSuperHeros"
import { RQSuperHero } from "./components/RQSuperHero"
import { ParallelQueries } from "./components/ParallelQueries"
import { DynamicParallelQueries } from "./components/DynamicParallelQueries"

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
              <li>
                <Link to='/rq-super-heroes-click'>RQ Super Heroes on Button</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes-hook'>RQ Super Heroes Hook</Link>
              </li>
              <li>
                <Link to='/rq-parallel'>RQ Parallel</Link>
              </li>{" "}
              <li>
                <Link to='/rq-dynamic-parallel'>RQ Dynamic Parallel</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/rq-dynamic-parallel'>
              <DynamicParallelQueries heroIds={[1, 3]} />
            </Route>
            <Route path='/rq-parallel'>
              <ParallelQueries />
            </Route>
            <Route path='/rq-super-heroes/:heroId'>
              <RQSuperHero />
            </Route>
            <Route path='/super-heroes'>
              <SuperHeros />
            </Route>
            <Route path='/rq-super-heroes'>
              <RQSuperHeros />
            </Route>
            <Route path='/rq-super-heroes-click'>
              <RQSuperHeroOnClick />
            </Route>
            <Route path='/rq-super-heroes-hook'>
              <UseHookSuperHeros />
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
