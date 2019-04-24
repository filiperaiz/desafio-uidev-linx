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

### gulp-taks
    -   Dentro desta pasta contem os arquivos especifico para cada tarefa que sera realizada pelo gul

### src
    -   Nesta pasta é onde fica a aplicação

### scss
    -   Todo os estilo dos components estao nesta pasta, nela possui subpastas para deixar mais facil a organização dos estilos dos components, o nome de cada arquivos é referente ao seu componente

### js
    -   O arquivo app.js é onde fica as configurações funções e validações dos components

### templates
    -   Aqui se encontra o html dos componentes
    -   Ao abrir o arquivo index.html você ira ver os componentes separados por blocos
    
## Componentes

### LOGO 
```html
    <section class="logo__box">
        <img class="logo__picture" :src="logo" alt="" />
        <h2 class="logo__title">Área de acesso</h2>
    </section>
```

### ALERTAS 
```html
    <div class="alerts errors" v-if="errors.length">
        <h5>Por favor, corrija o(s) seguinte(s) erro(s):</h5>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </div>

    <div class="alerts success" v-if="success">
        <h5>Cadastro realizado com sucesso</h5>
    </div>
```


### FORM GROUP 
```html
    <div class="form__group">
        <label class="form__group-label" for="email">Email</label>

        <div class="form__group-prepend">
            <i class="fas fa-user"></i>
        </div>

        <input type="text" class="form__group-input" v-model="email" placeholder="me@example.com" autocomplete="off" />
    </div>

    <div class="form__group">
        <label class="form__group-label" for="password">Senha</label>

        <div class="form__group-prepend">
            <i class="fas fa-lock"></i>
        </div>

        <i class="form__group-eyepassword fas" :class="[passwordIcon]" @click="hidePassword = !hidePassword"></i>
        
        <input class="form__group-input"  :type="passwordType" id="password" v-model="password" placeholder="**********" />
    </div>
```


### FORM ACTIONS 
```html
    <div class="form__actions">
        <button  @click="doLogin" v-bind:disabled="!isValid" class="btn" type="submit">Cadastrar</button>
        <hr class="divisor" />
        <button class="btn btn-outline" type="submit">Ir para o login
                <i class="fas fa-chevron-right"></i>
        </button>
    </div>
```
