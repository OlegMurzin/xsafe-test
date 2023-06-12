import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DatabaseData from '../../src/components/DatabaseData';
import logo from '../../src/assets/dmt-logo.png';
const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
        document.body.classList.toggle('open');;
    };
    return (
        <div>
            <nav>
                <img src={logo} alt="Logo" />
            </nav>
            <div className="overlay"></div>

            <button className="burger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            <aside className={isOpen ? 'open' : ''}>
                <a href={DatabaseData}>Startseite</a>
                <a>Datenbank</a>
                <a>Download</a>
                <a>Konfiguration</a>
                <h3>Konfigurationsdialoge</h3>
                <a>Messmanager</a>
                <a>PCDAU-QT5</a>
                <a>JUeberwachungsmanager</a>
                <a>JTrendmanager</a>
                <a>Dumptool</a>
                <button>Join cloud waitlist</button>
            </aside>
            <main>
                <article>
                    <img src="1.png" alt="Article 1" />
                    <div>
                        <name>Chris Hay, CTO at IBM iX</name>
                        <p>
                            It's fast, small, can run on browser, edge and cloud. It can handle
                            large data. It can run in-memory like redis or disk like sqlite and it
                            can run multi-cluster. It can sync between cloud and edge. And to top of
                            it off, it can also run as a graphdb. It's interesting.
                        </p>
                    </div>
                </article>
            </main>
        </div>
    );
};
export default App;
