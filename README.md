# CrisDepil - Salão de Depilação

Este é o site da CrisDepil, um salão especializado em depilação e cuidados com a pele.

## Estrutura do Projeto

O projeto consiste em:

- `index.html`: Estrutura principal do site
- `styles.css`: Estilos e formatação visual
- `app (1).js`: Funcionalidades interativas e dados dos produtos
- `Imagens/`: Pasta contendo todas as imagens utilizadas no site

## Como Executar o Site

### Método 1: Abrir Diretamente

A maneira mais simples de visualizar o site é abrindo o arquivo `index.html` diretamente no navegador:

1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`

### Método 2: Usando PowerShell

Você também pode usar o PowerShell para abrir o site:

1. Abra o PowerShell
2. Navegue até a pasta do projeto usando o comando `cd`
3. Execute o comando: `Start-Process "file:///$((Get-Location).Path)/index.html"`

### Método 3: Usando um Servidor Local (requer instalação adicional)

Para uma experiência mais completa, você pode instalar um servidor local:

#### Usando Node.js

1. Instale o Node.js de [nodejs.org](https://nodejs.org/)
2. Abra o terminal na pasta do projeto
3. Execute: `npx http-server -o`

#### Usando Python

1. Instale o Python de [python.org](https://python.org/)
2. Abra o terminal na pasta do projeto
3. Execute: `python -m http.server 8000`
4. Abra o navegador e acesse: `http://localhost:8000`

## Manutenção do Site

### Imagens

Todas as imagens estão na pasta `Imagens/`. Para adicionar ou substituir imagens:

1. Coloque os novos arquivos na pasta `Imagens/`
2. Atualize os caminhos nos arquivos HTML ou JavaScript conforme necessário
3. **IMPORTANTE**: Use sempre o formato `./Imagens/nome-do-arquivo.jpg` para referenciar imagens (com o ponto no início e respeitando maiúsculas/minúsculas)

### Produtos

Para adicionar ou modificar produtos, edite o array `products` no arquivo `app (1).js`.

### Contato

Para suporte técnico ou dúvidas sobre o site, entre em contato com o desenvolvedor.