import { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/themeContext';
import months from './months';
import './header.css';
import { useUser } from '../../../contexts/userContext';

export function CardHeader() {
  const { theme } = useTheme();
  const { username, name, linkProfile, createdAt } = useUser();
  const [date, setDate] = useState(new Date());

  useEffect(() => setDate(new Date(createdAt)) , [createdAt])

  return(
    <header className="card-header">
      <a
        href={linkProfile}
        target="_blank"
        rel="noreferrer"
        className={`username ${theme}`}
      >
        <h2>{ name }</h2>
        <h3>{ username }</h3>
      </a>

    </header>
  )
}