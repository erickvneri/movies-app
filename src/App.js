import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieDetails, MovieSearch, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact strict path="/">
          <Page children={<MovieSearch />} />
        </Route>
        <Route exact strict path="/movies/:id">
          <Page children={<MovieDetails />} />
        </Route>
        <Route children={<NotFound />} />
      </Switch>
    </Router>
  );
}

function Page({ children }) {
  return (
    <div className="Page">
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}

export default App;
