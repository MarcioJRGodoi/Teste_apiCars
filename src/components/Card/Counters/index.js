import { useTheme } from '../../../contexts/themeContext';
import { useUser } from '../../../contexts/userContext';
import './counters.css';

export function Counters() {
  const { theme } = useTheme();
  const { repos, followers, following } = useUser();

  return(
    <section className={`counters ${theme}`}>
      <div className="counter-item">
        <span>Ano</span>
        <h2>{ repos ? repos : '' }</h2>
      </div>

      <div className="counter-item">
        <span>Modelo</span>
        <h2>{ followers ? followers : '' }</h2>
      </div>

      <div className="counter-item">
        <span>Marca</span>
        <h2>{ following ? following : ''}</h2>
      </div>
    </section>
  )
}