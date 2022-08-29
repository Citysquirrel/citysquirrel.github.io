import { ReactChild, useEffect } from 'react';
import { childrenToReact } from 'react-markdown/lib/ast-to-react';
import { useLocation } from 'react-router';

export const ScrollToTop = (props: { children: JSX.Element }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
