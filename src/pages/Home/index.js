import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dados from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área."}
      />

      <Carousel 
        ignoreFirstVideo
        category={dados.categorias[0]}
      />
      <Carousel 
        category={dados.categorias[1]}
      />
      <Carousel 
        category={dados.categorias[2]}
      />
      <Carousel 
        category={dados.categorias[3]}
      />
      <Carousel 
        category={dados.categorias[4]}
      />
      <Carousel 
        category={dados.categorias[5]}
      /> 
    </PageDefault>
  );
}

export default Home;
