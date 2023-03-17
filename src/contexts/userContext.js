import { createContext, useContext, useState } from 'react';
import api from '../services/api';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [Modelo, setBio] = useState('');
  const [AnoModelo, setCreatedAt] = useState('');
  const [Valor, setFollowers] = useState('');
  const [CodigoFipe, setFollowing] = useState('');
  const [MesReferencia, setRepos] = useState('');
  const [Marca, setUsername] = useState('');

  const [statusMessage, setStatusMessage] = useState('Pesquise por um carro!');

  function searchUser(num_marca,num_modelo,ano_mes) {
    setStatusMessage('Carregando...');

    api.get(`/${num_marca}/modelos/${num_modelo}/anos/${ano_mes}`)
    .then(res => {
      const { data } = res;
      setBio(data.Modelo);
      setCreatedAt(data.AnoModelo);
      setFollowers(data.Valor);
      setFollowing(data.CodigoFipe);
      setRepos(data.MesReferencia);
      setUsername(data.Marca);
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