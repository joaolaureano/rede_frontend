import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import RedeInputSearch from '../../components/RedeInputSearch/RedeInputSearch';

import { allAreas } from '../../services/areas';

import Container from './StyledComponents/index';
import ContainersGeralCards from './StyledComponents/ContainerConhecimento';
import Cards from './StyledComponents/Cards';

import ColorsDefault from '../../utils/colors.constants';

function Mentorado() {
  const [areas, setAreas] = useState([]);
  const [showCards, setShowCards] = useState([]);
  const history = useHistory();


  function selectedArea(element, e) {
    e.preventDefault();
    sessionStorage.setItem('areaSelected', element);
    history.push('/mentorias-disponiveis');
  }

  function buildCards(values) {
    const cards = [];
    values.forEach((element, index) => {
      const color = ColorsDefault.CARDS_COLLORS[index % ColorsDefault.CARDS_COLLORS.length];
      cards.push(
        <Cards
          key={element}
          color={color}
          description={element}
          onClick={(e) => selectedArea(element, e)}
        />,
      );
    });
    setShowCards(cards);
  }

  // eslint-disable-next-line consistent-return
  async function getAreas(headers) {
    const results = await allAreas(headers);
    if (results.status !== 200) {
      return null;
    }
    const resultAreas = [];
    results.data.forEach((element) => {
      if (!resultAreas.includes(element.name)) {
        resultAreas.push(element.name);
      }
    });
    setAreas(resultAreas);
    buildCards(resultAreas);
  }

  function searchCards(searchString) {
    const filter = areas.filter((element) => ((element.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) ? element : ''));
    buildCards(filter);
  }

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const headers = { headers: { Authorization: `Bearer ${token}` } };
    getAreas(headers);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container.TituloPage>Home</Container.TituloPage>
      <RedeInputSearch placeholder="Procurar por Área" onChange={(e) => searchCards(e.target.value)} />
      <Container>
        <ContainersGeralCards>
          <ContainersGeralCards.TituloAreas>Áreas de conhecimento</ContainersGeralCards.TituloAreas>
          {showCards}
        </ContainersGeralCards>
      </Container>
    </>
  );
}

export default Mentorado;
