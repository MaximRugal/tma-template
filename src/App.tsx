import './App.css';
import { type FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import { routes } from './navigation/routes';
// import { IndexPage } from './pages/IndexPage';
import { routes } from './navigation/routes';
export const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
