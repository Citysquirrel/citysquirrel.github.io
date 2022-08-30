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
import styled, { ThemeProvider } from 'styled-components';
import { Blog, Home } from './pages';
import { ScrollToTop } from './components/wrappers';

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

const light_theme = {
  bg: '#edf4fc',
  bg_menu: '#e1ecfb',
  bg_menu_tp: 'rgba(255,236,251,0.61)',
  main: '#5d9cec',
  main_dark: '#355986',
  main_tint: '#9dc3f3',
  main_tint_more: '#c7dcf8',
};

interface IRouterContext {
  number: string | undefined;
  search: string | undefined;
}
type TestDispatch = Dispatch<React.SetStateAction<string>>;
export const RouterContext = createContext<IRouterContext>({
  number: undefined,
  search: undefined,
});
// export const TestDispatchContext = createContext<TestDispatch | null>(null);

function App() {
  // const [globalTest, setGlobalTest] = useState('전역상태 만들어보기');
  const { search } = useLocation();
  const { number } = useParams();
  const routerContext = useMemo(() => {
    return { number, search };
  }, [number, search]);
  // const dispatchMemo = useMemo(() => setGlobalTest, [setGlobalTest]);

  const colorTheme = localStorage.getItem('colorTheme');

  useEffect(() => {
    document.documentElement.setAttribute('color-theme', colorTheme || 'light');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RouterContext.Provider value={routerContext}>
      {/* <TestDispatchContext.Provider value={dispatchMemo}> */}
      <ThemeProvider theme={light_theme}>
        <Router basename="/">
          <ScrollToTop>
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
          </ScrollToTop>
        </Router>
      </ThemeProvider>
      {/* </TestDispatchContext.Provider> */}
    </RouterContext.Provider>
  );
}

export default App;
