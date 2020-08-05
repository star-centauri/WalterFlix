import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoryRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((categories) => setCategorias(categories));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const categoriaEscolhida = categorias
      .find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => history.push('/'));
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do vídeo:"
          value={values.titulo}
          onChange={handleChange}
          name="titulo"
          type="text"
        />

        <FormField
          label="URL:"
          value={values.url}
          onChange={handleChange}
          name="url"
          type="text"
        />

        <FormField
          label="Categorias:"
          value={values.categoria}
          onChange={handleChange}
          name="categoria"
          type="text"
          suggestions={categorias.map((categoria) => categoria.titulo)}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
