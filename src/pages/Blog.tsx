import { lazy, useEffect, useState } from 'react';
import {
  getIssues,
  modifyDatetime,
  useBodyColor,
  useConsole,
} from '../functions';
import { Endpoints } from '@octokit/types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { Issue } from '../components/blog';

const Container = styled.main``;

const Menu = styled.aside``;

const Blog = () => {
  useBodyColor('#f5f5f5');

  return (
    <Container>
      <Menu></Menu>
      <Issue />
    </Container>
  );
};

export default Blog;
