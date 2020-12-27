import React, { useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Projects';
import Resume from './components/Resume';
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  let choosePage = () => {
    if (currentPage === "about") {
      return <About />
    } else if (currentPage === "contact") {
      return <Contact />
    } else if (currentPage === "projects") {
      return <Portfolio />
    } else if (currentPage === "resume") {
      return <Resume />
    }
  }
  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} />
      <main>
        {choosePage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
