# Controle de Gastos - Aplicativo Mobile

## Sobre o Projeto

O Controle de Gastos é um aplicativo mobile desenvolvido em React Native com Expo, integrado a uma API REST para gerenciamento de despesas pessoais.

A aplicação permite visualizar e cadastrar gastos de forma simples, consumindo os dados fornecidos pelo backend. O objetivo do projeto é demonstrar a integração entre frontend mobile e backend, utilizando tecnologias modernas do ecossistema JavaScript.

## Tecnologias Utilizadas

* React Native
* Expo
* JavaScript
* Axios

## Funcionalidades

* Visualização dos gastos cadastrados
* Cadastro de novos gastos
* Consumo de API REST
* Atualização automática da lista de gastos

## Estrutura do Projeto

```text
appcontroledegastos/
│
├── App.js
├── package.json
├── assets/
└── node_modules/
```

## Como Executar o Projeto

### 1. Criar o Projeto

```bash
npx create-expo-app@latest appcontroledegastos --template blank
```

### 2. Acessar a Pasta do Projeto

```bash
cd appcontroledegastos
```

### 3. Instalar as Dependências

```bash
npm install axios
```

### 4. Executar a Aplicação

```bash
npx expo start
```

Após a execução, o Expo exibirá um QR Code no terminal.

Você poderá executar o aplicativo utilizando:

* Expo Go (Android ou iOS)
* Emulador Android
* Simulador iOS
* Navegador Web

## Integração com Backend

Antes de iniciar o aplicativo, certifique-se de que a API backend esteja em execução e que a URL configurada no projeto esteja apontando para o servidor correto.

## Objetivo Acadêmico

Este projeto foi desenvolvido com fins acadêmicos para praticar conceitos de desenvolvimento mobile com React Native, consumo de APIs REST, gerenciamento de estado com Hooks e integração entre frontend e backend.
