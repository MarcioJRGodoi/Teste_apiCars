import { Counters } from './Counters';
import { CardHeader } from './Header';
import { useTheme } from '../../contexts/themeContext';
import { useUser } from '../../contexts/userContext';

import './card.css';

export function Card() {
  const { theme } = useTheme();
  const { bio, avatar } = useUser();

  return(
    <div className={`card-container ${theme}`}>

      <main className="card-body">
        <CardHeader />

        <p className="bio">
          { bio ? bio : 'Descricao' }
        </p>

        <Counters />
      </main>
    </div>
  )
}