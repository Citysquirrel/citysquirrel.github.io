import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

/**
 * 하위 컴포넌트 전역에 마운트 시 스크롤을 최상위로 올려주는 래퍼입니다.
 * @param props JSX Element children
 * @returns JSX Element children
 */
export const ScrollToTop = (props: { children: JSX.Element }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return <>{props.children}</>;
};

/**
 * @description BroswerRouter를 통해 basename을 지정합니다. 또한 갖가지 Provider들을 본 함수에서 조작합니다.
 * 자식 컴포넌트는 반드시 하나의 최상위 엘레먼트를 가져야 합니다.
 * @param props JSX Element children
 * @returns BrowserRouter, Providers을 포함한 JSX Element
 */
export const MasterProvider = (props: { children: JSX.Element }) => {
  const themeInfos = {
    bg: '#edf4fc',
    bg_menu: '#e1ecfb',
    bg_menu_tp: 'rgba(255,236,251,0.61)',
    main: '#5d9cec',
    main_dark: '#355986',
    main_tint: '#9dc3f3',
    main_tint_more: '#c7dcf8',
  };
  return (
    <ThemeProvider theme={themeInfos}>
      <BrowserRouter basename="/">
        <ScrollToTop>{props.children}</ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
};
