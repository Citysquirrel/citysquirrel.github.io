import { useEffect } from 'react';
import hljs from 'highlight.js';

export const Javascript = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <pre>
        <code className="language-javascript">
          {`const num = 0; \n console.log(num);`}
        </code>
      </pre>
    </>
  );
};
