import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

const StaticSite = () => (
  <Router>
    <div>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/acerca/" component={Acerca}/>
      <Route path="/servicios/" component={Servicios}/>
      <Route path="/contacto/" component={Contacto}/>
    </div>
  </Router>
)

const Header = () => (
  <div>
      <h1>Primeros pasos con React Router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/acerca">Acerca</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
  </div>
)
const Home = () => (
  <div>
    <h2>Hola Bienvenidos a mi WebApp React :D</h2>
  </div>
)

const Acerca = () => (
  <div>
    <h2>Hola soy Carlos Vesga Salas</h2>
  </div>
)

const Servicios = () => (
  <div>
    <li>Ingeniero de Sistemas</li>
    <li>Desarrollador Web</li>
  </div>
)

const Contacto = ( { match } ) => (
  <div>
    <h2>Información de su servidor</h2>
    <Route path={`${match.url}/:contactoInfo`} component={InfoContacto}/>
    <ul>
      <li>
        <Link to={`${match.url}/email`}>Email</Link>
      </li>
      <li>
        <Link to={`${match.url}/web`}>Sitio Web</Link>
      </li>
      <li>
        <Link to={`${match.url}/ubicacion`}>Ubicacion</Link>
      </li>
    </ul>
    <Route exact path={match.url} render={()=>( <h3>Mantente en contacto</h3> )}/>
    <Route path={`${match.url}/email`} render={()=>( <p>Cavesa10@gmail.com</p> )}/>
    <Route path={`${match.url}/web`} render={()=>( <p>Fb.com/carlos.vesgasalas</p> )}/>
    <Route path={`${match.url}/ubicacion`} render={()=>( <p>Santa Marta, D.T.C.H, Magdalena Colombia</p> )}/>
  </div>
)

const InfoContacto = ({match}) => (
  <div>
    <h4>{match.params.contactoInfo}</h4>
  </div>
)

export default StaticSite