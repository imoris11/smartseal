import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import routes, { renderRoutes } from './routes';

const App = () => <Router>{renderRoutes(routes)}</Router>;

export default App;
