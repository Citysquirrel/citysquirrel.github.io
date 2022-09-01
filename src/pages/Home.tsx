import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  useBodyColor,
  useLabelAllCheckbox,
  useScreenBorder,
} from '../functions';
import styleForMarkdown from '../lib/StyleForMarkdown';
import note from '../markdown/Note.md';

const Container = styled.main`
  margin-top: 60px;
  margin-bottom: 60px;
  font-size: 18px;
  animation: 1s 0.5s fadeIn;
  animation-fill-mode: both;

  ${styleForMarkdown}
`;

const url =
  'https://raw.githubusercontent.com/Citysquirrel/citysquirrel.github.io/master/README.md';

export default function Home() {
  const [body, setBody] = useState('');
  useBodyColor('#fdfdfd');
  useScreenBorder(
    {
      top: '4px',
      right: '4px',
      bottom: '4px',
      left: '4px',
      container: '4px',
    },
    '#b3e6a8'
  );
  useLabelAllCheckbox(body);
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => setBody(text));
  }, []);
  return (
    <Container>
      <Markdown>{body}</Markdown>
    </Container>
  );
}
