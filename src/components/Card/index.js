import { Counters } from './Counters';
import { CardHeader } from './Header';
import { useTheme } from '../../contexts/themeContext';
import { useUser } from '../../contexts/userContext';

import './card.css';

export function Card() {
  const { theme } = useTheme();
  const { Modelo, Marca } = useUser();

  return(
    <div className={`card-container ${theme}`}>

      <main className="card-body">
        <CardHeader />

        <Counters />
      </main>
    </div>
  )
}