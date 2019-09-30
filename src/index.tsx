import React, { useEffect, useState } from 'react';
import { render, Box } from 'ink';
import fetch from 'node-fetch';

interface Root {
  id: number;
  status: string;
  onStateFrom: string;
  lastExecuted: string;
  uri: string;
  name: string;
  discoveryService: any;
  entries: Entry[];
  history: History[];
}

interface Entry {
  id: number;
  name: string;
  status: string;
  description?: string;
  duration: string;
}

interface History {
  id: number;
  status: string;
  on: string;
}

/**
 * 1. fetch data from https://status-dev.cinch.somo-tools.com/healthchecks-api
 * 2. format data into props
 * 3. render as a table
 */

const App = () => {
  const [data, setData] = useState<Root[]>([]);

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
