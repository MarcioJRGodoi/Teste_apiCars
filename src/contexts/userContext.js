import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [Modelo, setModel] = useState('');
  const [AnoModelo, setCreatedAt] = useState('');
  const [Valor, setValor] = useState('');
  const [CodigoFipe, setFipe] = useState('');
  const [MesReferencia, setRefer] = useState('');
  const [Marca, setMarca] = useState('');

  const [statusMessage, setStatusMessage] = useState('Pesquise por um carro!');

  function searchUser(num_marca,num_modelo,ano_mes) {
    setStatusMessage('Carregando...');

    api.get(`/${num_marca}/modelos/${num_modelo}/anos/${ano_mes}`)
    .then(res => {
      const { data } = res;
      setModel(data.Modelo);
      setCreatedAt(data.AnoModelo);
      setValor(data.Valor);
      setFipe(data.CodigoFipe);
      setRefer(data.MesReferencia);
      setMarca(data.Marca);
      setStatusMessage('');
    })
    .catch(err => {
      console.error('ERROR: ', err);
      setStatusMessage('Carro não encontrado!');
    })
  }

  return(
    <UserContext.Provider
      value={{
        Modelo,
        AnoModelo,
        Valor,
        CodigoFipe,
        MesReferencia,
        Marca,
        statusMessage,
        searchUser
      }}
    >
      { children }
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}