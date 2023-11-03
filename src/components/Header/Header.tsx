import { useEffect, useState } from 'react';
import "./Header.scss";
import { getDate } from '../../functions/DateFormat';

const Header = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

      useEffect(() => {
        setInterval(() => setCurrentDate(new Date()), 1000);
      }, []);

  return (
    <header>
        <h1>Todo Application</h1>
        <nav>
          <ul>
            <li>
              <h3>Todo</h3>
              <div className="line"></div>
            </li>
            <li>
              <h3>Account</h3>
              <div className="line"></div>
            </li>
          </ul>
          <ul>
            <li style={{cursor: "auto"}}>
              <h3>{getDate(currentDate)}</h3>
            </li>
            <li>
              <button><h3>Log out</h3></button>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;