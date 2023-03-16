import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../../contexts/themeContext";
import { useUser } from "../../contexts/userContext";

import './search.css';

export function Search() {
  const { theme } = useTheme();
  const { searchUser } = useUser();
  const [carname, setCarname] = useState('');
  const [carnumber, setCarnumber] = useState('');

  function handleSearchUser(e) {
    e.preventDefault();
    searchUser(carname,carnumber);
    setCarname('');
    setCarnumber('');
  }

  return(
    <form className={theme} onSubmit={handleSearchUser}>
      <FaSearch size={28} color="var(--blue)" />
      <input
        type="text"
        placeholder="Search Car name..."
        value={carname}
        onChange={e => setCarname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search Car numb..."
        value={carnumber}
        onChange={e => setCarnumber(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}