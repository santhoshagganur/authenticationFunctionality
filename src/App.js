import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
