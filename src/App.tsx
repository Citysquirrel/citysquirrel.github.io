import './App.css';
import { createContext, useMemo, useState, Dispatch, useEffect } from 'react';
import { Footer, Header } from './layouts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from 'react-router-dom';
import styled from 'styled-components';
import { Blog, Home } from './pages';
import { MasterProvider, ScrollToTop } from './components/wrappers';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent;
  min-height: calc(100vh);
  transition: all 1s;
  > main {
    max-width: 1200px;
    width: 80vw;
  }
`;

interface IRouterContext {
  number: string | undefined;
  search: string | undefined;
}
type TestDispatch = Dispatch<React.SetStateAction<string>>;
export const RouterContext = createContext<IRouterContext>({
  number: undefined,
  search: undefined,
});

function App() {
  const colorTheme = localStorage.getItem('colorTheme');

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', colorTheme || 'light');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MasterProvider>
      <>
        <div id="top" className="entire-border"></div>
        <div id="right" className="entire-border"></div>
        <div id="bottom" className="entire-border"></div>
        <div id="left" className="entire-border"></div>
        <div className="App">
          <Header />

          <Container id="container">
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/blog/" element={<Blog />} />
              <Route path="/blog/:number" element={<Blog />} />

              {/* <Route path="/examples/*" element={<Examples />} /> */}
              {/* <Route path="/pictures/*" element={<Pictures />} /> */}
              {/* <Route path="/study/*" element={<Study />} /> */}
              {/* <Route path="/*" element={<Wrong />} /> */}
            </Routes>
            <Footer />
          </Container>
        </div>
      </>
    </MasterProvider>
  );
}

export default App;
