import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 1000) // fake async
  },
  signout(cb){
    this.isAuthenticated = false
    setTimeout(cb,1000)
  }
}

const Home = () => <h3>Home</h3>
const Public = () => <h3>Contenido Publico</h3>
const Protected = () => <h3>Contenido Protegido</h3>

const AuthButton = withRouter( ( {history} ) => (
  ( fakeAuth.isAuthenticated )
    ?
      <div>
        <h2>Bienvenido! ;D</h2>
        <button onClick={()=> fakeAuth.signout( () => history.push('/'))} >Salir</button>
      </div>
    :
      <h2>No Estás Logueado</h2>
  ) 
)

const PrivateRoute = ( {component: Components, rest} ) => (
  <Route {...rest} render={(props) => (
    (fakeAuth.isAuthenticated)
      ? <Components {...props} />
      : <Redirect to={ {pathname: '/login', state: { from: props.location }}}  />
  )}  />
)

class Login extends Component {
  constructor (...props){
    super(...props)
    this.state = {
      redirectRoute: false
    }
    this.login = this.login.bind(this)
  }

  login(){
    fakeAuth.authenticate( () => this.setState({redirectRoute: true}) )
  }

  render () {
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    const {redirectRoute} = this.state
    if (redirectRoute) {
      return(
        <Redirect to={from} />
      )
    } else {
      return(
        <div>
          <h3>Debes de estar logueado para ver esta página <mark>{from.pathname}</mark> </h3>
          <button onClick= {this.login} >Log In</button>
        </div>
      )
    }
  }

}

const AuthSite = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/protected">Página Protegida</Link>
        </li>
        <li>
          <Link to="/public">Página Pública</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/public" component={Public}/>
        <PrivateRoute path="/protected" component={Protected} />
        <Route path="/login" component={Login}/>
      </Switch>
    </div>
  </Router>
)

export default AuthSite
