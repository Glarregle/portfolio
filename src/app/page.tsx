import Force from '../components/Force.jsx';

export default function Home() {
  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <button className="text-white focus:outline-none md:hidden" aria-label="Toggle Navigation">
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="https://udacity.com" className="text-white hover:text-gray-300">Portfolio</a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center">Data Visualization and D3.js</h1>
        <div className="mt-8">
          <Force/>
        </div>
      </div>
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-lg">Footer</h1>
          <nav>
            <ul className="flex justify-center space-x-4 mt-2">
              {/* Add social links here */}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
