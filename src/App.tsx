import React from 'react';
import Header from './components/Header';
import News from './components/News';
import Case from './components/Case';
import Link from './components/Link';
import Footer from './components/Footer';
import './styles/reset.css';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <News />
        <Case />
        <Link />
      </main>
      <Footer />
    </>
  );
};

export default App;
