function App() {
  return (
    <>
      <div id="navbar" className="mb-15 flex items-center space-x-10 ">
        <div>
          <img src="/logo.png" alt="logo" className="w-30" />
        </div>
        <ul className="flex space-x-5 text-sm">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div id="faq" className="mt-15">
        faq section
      </div>
      <div id="footer" className="mt-15">
        footer section
      </div>
    </>
  );
}

export default App;
