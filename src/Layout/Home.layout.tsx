import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

function HomeLayout() {
  return (
    <div className="flex flex-col">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </header>

      {/* Scrollable Outlet Section */}
      <main className="flex-grow mt-16 overflow-y-auto">
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10">
        <Footer />
      </footer>
    </div>
  );
}

export default HomeLayout;
