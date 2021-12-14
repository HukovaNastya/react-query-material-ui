import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "typeface-josefin-sans";
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
       <Router>
         <App />
       </Router>
     </QueryClientProvider>

  </React.StrictMode>,
  document.getElementById('root')
);