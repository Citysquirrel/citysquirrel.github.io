import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkCold as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ICode {
  className: string | undefined;
  children: string | string[];
}

interface IPre {
  children: JSX.Element;
}

const CodeConfig = ({ className, children }: ICode) => {
  const myStyle = {
    borderRadius: '4px',
    padding: '16px',
    margin: '8px 0',
    backgroundColor: 'var(--soft-blue-100)',
    letterSpacing: '0.025em',
  };
  let language = 'text';
  if (className && className.startsWith('lang-')) {
    language = className.replace('lang-', '');
  }
  return (
    <>
      <div></div>
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={myStyle}
        wrapLines={true}
        children={children}
      />
    </>
  );
};

const PreConfig = ({ children, ...rest }: IPre) => {
  if ('type' in children && children['type'] === 'code') {
    return CodeConfig(children['props']);
  }
  return (
    <pre style={{ borderRadius: '4px' }} {...rest}>
      {children}
    </pre>
  );
};

export default PreConfig;
