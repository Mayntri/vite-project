import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Welcome, Button } from "@mayntri/frontend-core";
import {
  Box,
  Button as Button2,
  Slide,
  Typography,
} from "@mui/material";
import { useMerchants } from "@mayntri/react-sdk";
import { Table } from "./components/Table";

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const result = useMerchants();
  const data = result.data?.pages[0].data || []

  return (
    <div className="App">
      <Welcome />
      <Button label="Button" />
      <Button2 onClick={() => setChecked(!checked)}>Test</Button2>

      <Box sx={{ width: `calc(100px + 16px)` }}>
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Typography>test</Typography>
        </Slide>
      </Box>

      <Table data={data} columns={[
        {
          accessorKey: "_id",
          header: "ID",
        },
      ]} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
