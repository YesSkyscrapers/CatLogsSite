import logo from './logo.svg';
import './App.css';
import HeaderContainer from './Header/HeaderContainer';
import Navigator from './Navigator';
import SideBarContainer from './SideBar/SideBarContainer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "CatLogs";
  }, []);

  return (
    <div className="App">
      <HeaderContainer />
      <Navigator />
      <SideBarContainer />
    </div>
  );
}

export default App;
