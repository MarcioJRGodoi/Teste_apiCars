import './index.css'
import { Search } from './components/Search';
import { Card } from './components/Card';
import { useTheme } from './contexts/themeContext';
import { useUser } from './contexts/userContext';

function App() {

  const { theme } = useTheme();
  const { statusMessage } = useUser();
  
  return (
  <div className='container dark'>
    <main className='content'>
    <Search/>
    
            <Card />
          
        
    </main>
    
  </div>
  );
}

export default App;
