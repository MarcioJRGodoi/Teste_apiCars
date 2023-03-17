import { useTheme } from '../../../contexts/themeContext';
import { useUser } from '../../../contexts/userContext';
import './counters.css';

export function Counters() {
  const { theme } = useTheme();
  const { AnoModelo, Valor, CodigoFipe, Marca, Modelo } = useUser();

  return(
    <section className={`counters ${theme}`}>
      <div className="counter-item">
        <span>Ano</span>
        <h2>{ AnoModelo ? AnoModelo : '' }</h2>
      </div>

      <div className="counter-item">
        <span>Valor</span>
        <h2>{ Valor ? Valor : '' }</h2>
      </div>

      <div className="counter-item">
        <span>Codigo Fipe</span>
        <h2>{ CodigoFipe ? CodigoFipe : ''}</h2>
      </div>
      <p>
      <div className="counter-item">
        <span>Modelo</span>
        <h2>Modelo: { Modelo }</h2>
      </div>

      <div className="counter-item">
        <span>Marca</span>
        <h2>Marca: {Marca}</h2>
      </div>
      </p>
    </section>
  )
}