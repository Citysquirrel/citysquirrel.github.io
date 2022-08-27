import { Fragment, useEffect, useState } from 'react';
import Transistor from 'markdown-to-jsx';
import { renderMarkdown, useBodyColor } from '../../functions';
import styled from 'styled-components';

const Blank = styled(Fragment)`
  text-align: left;
`;

const Container = styled.article`
  display: inline-block;
`;

const Markdown = ({ body = '123' }: { body: string }) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const response = renderMarkdown(body);
  useEffect(() => {
    setIsLoading(true);
    response.then((res) => {
      setData(res.data);
      setIsLoading(false);
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
