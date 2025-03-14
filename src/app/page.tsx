import Force from '../components/Force.jsx';

export default function Home() {
  return (
    <>
        <nav className="navbar navbar-inverse navbar-static-top">
          <div className="nav-container container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand logo" id="header-logo" href="https://classroom.udacity.com">
              </a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="https://udacity.com">Portfolio</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="main-title">Data Visualization and D3.js</h1>
          <div className="main">
            <Force/>
          </div>
        </div>
        <div className="footer">
          <div id="footer">
            <h1 className="footer-header"></h1>
            <nav className="social">
              <ul className="social_links">
              </ul>
            </nav>
          </div>
        </div>
    </>
  );
}
