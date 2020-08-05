/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categorias';

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => setDados(categoriesWithVideos))
      .catch((err) => {
        alert(err.message);
        console.warn(err.message);
      });
  }, []);

  return (
    <PageDefault>
      {dados.length === 0 && (<div>Loading...</div>)}

      {dados.map((categorie, index) => {
        if (index === 0) {
          return (
            <div key={categorie.id}>
              <BannerMain
                videoTitle={categorie.videos[0].titulo}
                url={categorie.videos[0].url}
                videoDescription="Em homenagem ao meu filho de quatro patas =^-^="
              />

              <Carousel
                ignoreFirstVideo
                category={categorie}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categorie.id}
            category={categorie}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
