import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center; /* Centralizar no eixo Y */
  justify-content: space-between;

  a {
    display: flex;
    align-items: center; /* Centralizar no eixo Y */
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center; /* Centralizar no eixo Y */

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    /* A div contém nome do repo e descrição */
    div {
      margin-left: 24px;

      /* Nome do repo */
      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      /* Descrição do repo */
      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  /* Stars, forks e issues do repo */
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      /* A partir do segundo li, será aplicado uma margem na esquerda */
      & + li {
        margin-left: 80px;
      }

      /* Número */
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      /* Nome */
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px; /* Margem superior */

  a {
    background: #fff; /* Cor de fundo */
    border-radius: 5px; /* Curvatura das bordas */
    width: 100%; /* O elemento ocupará 100% da largura do componente Repositories */
    padding: 24px; /* Espaçamento interno */
    text-decoration: none; /* Retira "decorações" do texto, como sublinhados */

    display: flex; /* Essa propriedade forçará que os elementos dentro do Form fiquem lado a lado */
    align-items: center; /* Alinhar conteúdo ao centro no eixo Y */
    transition: transform 0.2s; /* Transição do hover abaixo em 0.2 segundos */

    &:hover {
      /* Quando o mouse estiver em cima do elemento, ele será deslocado 10 pixels para a direita */
      transform: translateX(10px);
    }

    /* Se depois de um a (referenciado pelo &, sendo o elemento acima) tivermos outro a, adicionamos o margin top */
    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px; /* Margens sup. e inf. 0; Margens laterais 16px */
      flex: 1; /* A div se ajustará ao tamanho disponível */

      strong {
        font-size: 20px; /* Tamanho da fonte */
        color: #3d3d4d; /* Cor da fonte */
      }

      p {
        font-size: 18px; /* Tamanho da fonte */
        color: #a8a8b3; /* Cor da fonte */
        margin-top: 4px; /* Margem superior */
      }
    }

    /* A logo importada de dentro do React Icons é um SVG, então estilizamos ela desta forma */
    svg {
      margin-left: auto; /* Fazemos com que todo o espaço disponível na esquerda se torne margem */
      color: #cbcbd6; /* Cor do ícone */
    }
  }
`;
