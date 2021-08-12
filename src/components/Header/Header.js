import logo from '../../assets/logo.svg';
import './Header.css';

export function Header({ actions }) {
  return (
    <header>
      <Title />
      {actions}
    </header>
  );
}

function Title() {
  return (
    <div className="AppTitle">
      <img alt="App Logo" className="AppLogo" src={logo} />
      <h3>BTS Movies App</h3>
    </div>
  );
}
