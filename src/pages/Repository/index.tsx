import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars1.githubusercontent.com/u/40298594?s=460&u=0c9f3c0d46b9b74e75fc27d845ba2ad526665937&v=4"
            alt="Jamerson Aguiar"
          />
          <div>
            <strong>jamezaguiar/typescript-masterclass</strong>
            <p>Repositório da aula de TypeScript</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>10</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>10</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asasas">
          <div>
            <strong>a</strong>
            <p>b</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
