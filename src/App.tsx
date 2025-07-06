import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import AppRoutes from './routes';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;