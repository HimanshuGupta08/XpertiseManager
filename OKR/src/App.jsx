import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
