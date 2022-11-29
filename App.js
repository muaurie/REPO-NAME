import { Outlet } from 'react-router-dom'

import POPOSDetails from './POPOSDetails'
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Footer from './Footer';
import POPOSList from './POPOSList';

<img src={logo} />

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <POPOSList />
      <Footer />
    </div>

<Route path="/" element={<App />}>

  <Route path="/" element={<POPOSList />} />
  <Route path="about" element={<About />} />
  <Route path="/details/:id" element={<POPOSDetails />} />
</Route>
  );
}


export default App;
