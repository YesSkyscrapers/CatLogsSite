import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Header/HeaderContainer';
import Navigator from './Navigator';
import SideBarContainer from './SideBar/SideBarContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <Navigator />
      <SideBarContainer />
    </div>
  );
}

export default App;
