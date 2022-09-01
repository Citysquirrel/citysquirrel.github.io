import { useEffect, useState } from 'react';
import { renderMarkdown } from '../../functions';
import styled from 'styled-components';

const Container = styled.article`
  display: inline-block;
`;

//! 아마 사용되지 않을 예정 XSS 위험.
const Markdown = ({ body = '' }: { body: string }) => {
  const [data, setData] = useState('');
  const response = renderMarkdown(body);
  useEffect(() => {
    response.then((res) => {
      setData(res.data);
    });
  }, [response]);
  return (
    <Container dangerouslySetInnerHTML={{ __html: data }}></Container>
    // <Blank>
    //   <Transistor options={{ wrapper: 'article', forceBlock: true }}>
    //     {body}
    //   </Transistor>
    // </Blank>
  );
};

export default Markdown;
