import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserViewTable from './components/tables/UserViewTable';
import Home from './pages/Home';

function App() {
  return (
    <div className='flex flex-col w-full'>
      <Header />
      <div className='flex'>
        <Sidebar />
        {/* <Home /> */}
        <UserViewTable />
      </div>
    </div>
  );
}

export default App;
