// средства маршрутизации
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// стили
import { Container } from 'react-bootstrap'
// компоненты
import { Home } from './components/Home/Home';
import { ChatRoom } from './components/ChatRoom/ChatRoom';

// маршруты
const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/:roomId', name: 'ChatRoom', Component: ChatRoom }
]

export const App = () => (
  <Router>
    <Container style={{ maxWidth: '512px' }}>
      <h1 className='mt-2 text-center'>Messager Hexly</h1>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} exact>
            <Component />
          </Route>
        ))}
      </Switch>
    </Container>
  </Router>
)