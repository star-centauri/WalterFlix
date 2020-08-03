/* eslint linebreak-style: ["error", "windows"] */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valuesDefault = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [newCategoria, setNewCategoria] = useState(valuesDefault);

  function setValues(key, value) {
    setNewCategoria({
      ...newCategoria,
      [key]: value,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues(
      name,
      value,
    );
  }

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
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
        {newCategoria.nome}
      </h1>

      <form
        style={{ padding: '10px 50px' }}
        onSubmit={(event) => {
          event.preventDefault();
          setCategorias([...categorias, newCategoria]);
          setNewCategoria(valuesDefault);
        }}
      >

        <FormField
          label="Nome:"
          value={newCategoria.nome}
          onChange={handleChange}
          name="nome"
          type="text"
        />
        <FormField
          label="Descrição:"
          value={newCategoria.descricao}
          onChange={handleChange}
          name="descricao"
          type="textarea"
          as="textarea"
        />
        <FormField
          label="Cor:"
          value={newCategoria.cor}
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
        {categorias.map((categoria, index) => <li key={index}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
