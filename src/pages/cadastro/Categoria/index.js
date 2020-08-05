import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valuesDefault = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const { values, handleChange, cleanForm } = useForm(valuesDefault);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://walterflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        const resultJson = await response.json();
        setCategorias([...resultJson]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        style={{ padding: '10px 50px' }}
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, values]);
          cleanForm();
        }}
      >

        <FormField
          label="Nome:"
          value={values.nome}
          onChange={handleChange}
          name="nome"
          type="text"
        />
        <FormField
          label="Descrição:"
          value={values.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
          as="textarea"
        />
        <FormField
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
          name="cor"
          type="color"
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>Loading...</div>
      )}

      <ul>
        {categorias.map((categoria) => <li key={categoria.id}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
