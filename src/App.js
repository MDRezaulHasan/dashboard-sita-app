import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <h1 className="content">Contents</h1>

      </div>


      <Footer />
    </div>
  );
}

export default App;
