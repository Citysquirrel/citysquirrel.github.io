import { useEffect } from 'react';

export function useFadeIn() {
  useEffect(() => {
    console.log(123);
  }, []);
}

export function useStopBodyScroll() {
  useEffect(() => {
    document.body.classList.add('stop-scrolling');
    return () => {
      document.body.classList.remove('stop-scrolling');
    };
  }, []);
}

export function useBodyColor(color: String) {
  useEffect(() => {
    document.body.style.backgroundColor = `${color}`;
    return () => {
      document.body.style.backgroundColor = '#fff';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
