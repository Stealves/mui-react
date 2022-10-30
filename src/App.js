import './App.css';
import { Button, Typography } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Typography variant="myVariant">MUI Heading</Typography>
      <Typography sx={{ color: "MyCustomColor.main" }}>Simple but cool subtitle</Typography>
      <Typography>Lorem ipsum dolor</Typography>
      <Button variant="contained">MUI Button</Button>
    </div>
  );
}

export default App;
