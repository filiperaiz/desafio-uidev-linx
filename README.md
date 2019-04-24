# Desafio UI Developer (Linx Digital)

> Documentação do componentente da tela de login

## Instalando o gulp projeto

```sh

$ npm install gulp-cli -g
$ npm install gulp -D

```

## Iniciando o projeto

```sh
$ npm i

# build
$ gulp

# Watch
$ gulp w
```

## CSS

Este projeto esta usando Sass como preprocessador, ultilizando o padrão BEM para a nomeclatura das classes.

## JS

Este projeto esta usando o Vue Js para a criação dos componentes (funções e validações)


## Estrutura de pastas do projeto

- gulp-taks
    Dentro desta pasta contem os arquivos especifico para cada tarefa que sera realizada pelo gul

- src
    Nesta pasta é onde fica a aplicação

- scss
    Todo os estilo dos components estao nesta pasta, nela possui subpastas para deixar mais facil a organização dos estilos dos components, o nome de cada arquivos é referente ao seu componente

- js
    O arquivo app.js é onde fica as configurações funções e validações dos components

- templates
    Aqui se encontra o html dos componentes

    Ao abrir o arquivo index.html você ira ver os componentes separados por section
    
```html

    <section class="logo__box">
        <img class="logo__picture" :src="logo" alt="" />
        <h2 class="logo__title">Área de acesso</h2>
    </section>
```
