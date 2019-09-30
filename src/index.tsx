import React, { useEffect, useState } from 'react';
import { render, Box } from 'ink';
import fetch from 'node-fetch';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://status-dev.cinch.somo-tools.com/healthchecks-api');
      setData(await response.json());
    }

    getData().catch();
  }, []);

  return (
    <Box>
      {data.map((d) => <Box key={d.id}>{d.name}</Box>)}
    </Box>
  );
};

render(<App />);
