import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px; /* Tamanho da fonte */
  color: #3a3a3a; /* Cor da fonte */

  max-width: 450px; /* Largura máximo do título */
  line-height: 56px; /* Altura da linha; Isso fará com que a de baixo se aproxime da de cima */

  margin-top: 80px; /* Margem superior */
`;

export const Form = styled.form`
  margin-top: 40px; /* Margem superior */
  max-width: 700px; /* Largura máxima do formulário */

  display: flex; /* Essa propriedade forçará que os elementos dentro do Form fiquem lado a lado */

  /* Encadeamento de CSS */

  input {
    flex: 1; /* Essa propriedade fará com que o input ocupe todo o form, mas se adaptando de acordo com os elementos que estão ao lado */
    height: 70px; /* Altura do input */
    padding: 0 24px; /* Espaçamento interno do input; 0 superior e inferior, 24 nas laterais */
    border: 0; /* Sem bordas */
    border-radius: 5px 0 0 5px; /* Curvatura das bordas somente no lado esquerdo */
    color: #3a3a3a; /* Cor da fonte */

    /* Placeholder um pouco mais claro */
    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px; /* Largura do botão */
    height: 70px; /* Altura do botão */
    background: #04d361; /* Cor do botão */
    border: 0; /* Sem bordas */
    border-radius: 0 5px 5px 0; /* Curvatura das bordas somente do lado direito */
    color: #fff; /* Cor do texto do botão */
    font-weight: bold; /* Fonte em negrito */
    transition: background-color 0.2s; /* Transição de 0.2 segundos da cor de fundo */

    /* Transição escurecendo a cor do botão em 20% ao colocar o mouse em cima */
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px; /* Margem superior */
  max-width: 700px; /* Largura máxima */

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

    img {
      width: 64px; /* Largura da imagem */
      height: 64px; /* Altura da imagem */
      border-radius: 50%; /* Aplicamos 50% de curvatura de borda em todos os lados, desta forma, a imagem ficará redonda */
    }

    div {
      margin-left: 16px; /* Margem esquerda */

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
