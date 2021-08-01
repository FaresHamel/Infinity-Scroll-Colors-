
import './App.css';
import { useState ,useEffect} from 'react';

const App = () => {

  const [boxses, setBoxses] = useState([{ bg: "#aaa" }]);
  
  useEffect(() => {
    
   const interval = setInterval(() => {
      setBoxses([
        ...boxses,
        { bg: "#" + ((Math.random() * 0xffffff) << 0).toString(16) },
      ]);
    }, 1000);

    return () => clearInterval(interval);

  }, [boxses]);
    
  return (
    <div className="hero">
      {
        boxses.map((box,index) => (
        <div key={index} className="box" style={{background:box.bg}}>
            
            <p>{index}</p>
      
        </div>
      ))
     }
    </div>
  );
}

export default App;
