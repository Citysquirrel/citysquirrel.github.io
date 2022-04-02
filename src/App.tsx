import './App.css';
import { createContext, useMemo, useState, Dispatch } from 'react';
import { Footer, Header } from './layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Examples, Pictures, Wrong, Study } from './pages';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  border: 2px solid ${(props) => props.theme.bg};
`;

const Pages = styled.div`
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
`;

// --bg-menu: #e1ecfb;
// --bg-menu-tp: rgba(225, 236, 251, 0.61);
// --bg: #edf4fc;
// --main-dark: #355986;
// --main: #5d9cec;
// --main-tint: #9dc3f3;
// --main-tint-more: #c7dcf8;
const light_theme = {
  bg: '#edf4fc',
  bg_menu: '#e1ecfb',
  bg_menu_tp: 'rgba(255,236,251,0.61)',
  main: '#5d9cec',
  main_dark: '#355986',
  main_tint: '#9dc3f3',
  main_tint_more: '#c7dcf8',
};

type TestDispatch = Dispatch<React.SetStateAction<string>>;
export const TestContext = createContext<string | null>('힝');
export const TestDispatchContext = createContext<TestDispatch | null>(null);

function App() {
  const [globalTest, setGlobalTest] = useState('전역상태 만들어보기');
  const testMemo = useMemo(() => globalTest, [globalTest]);
  const dispatchMemo = useMemo(() => setGlobalTest, [setGlobalTest]);
  return (
    <TestContext.Provider value={testMemo}>
      <TestDispatchContext.Provider value={dispatchMemo}>
        <ThemeProvider theme={light_theme}>
          <Router basename="/citysquirrel.github.io">
            <div className="App">
              <Header />
              <Container id="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  {/* <Route path="/examples/*" element={<Examples />} /> */}
                  <Route path="/pictures/*" element={<Pictures />} />
                  {/* <Route path="/study/*" element={<Study />} /> */}
                  <Route path="/*" element={<Wrong />} />
                </Routes>
                <Footer />
              </Container>
            </div>
          </Router>
        </ThemeProvider>
      </TestDispatchContext.Provider>
    </TestContext.Provider>
  );
}

export default App;
