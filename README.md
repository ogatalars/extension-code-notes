# Extension Code Notes

## Descrição

A **Extension Code Notes** é uma extensão do Chrome que permite aos usuários criar e gerenciar notas de código diretamente no navegador. Ideal para desenvolvedores que desejam manter snippets de código e anotações acessíveis enquanto navegam na web.

## Funcionalidades

- Criação e edição de notas de código.
- Suporte a múltiplas linguagens de programação.
- Armazenamento local das notas usando o `localStorage`.
- Interface amigável e fácil de usar.

## Instalação

1. Clone este repositório para o seu ambiente local:

   ```sh
   git clone https://github.com/ogatalars/extension-code-notes.git
   ```

2. Abra o Google Chrome e vá para `chrome://extensions/`.

3. Ative o "Modo do desenvolvedor" no canto superior direito.

4. Clique em "Carregar sem compactação" e selecione o diretório onde você clonou este repositório.

5. A extensão será carregada e você verá o ícone da **Extension Code Notes** na barra de ferramentas do Chrome.

## Uso

1. Clique no ícone da extensão na barra de ferramentas do Chrome.

2. A interface da extensão será aberta. Você pode adicionar, editar e excluir notas de código conforme necessário.

3. As notas são salvas automaticamente no `localStorage` do navegador, garantindo que você tenha acesso às suas anotações mesmo após fechar o navegador.

## Estrutura do Projeto

```
extension-code-notes/
│
├── public/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── index.html
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Editor.tsx
│   │   ├── NoteList.tsx
│   │   └── NoteItem.tsx
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Popup.tsx
│   ├── styles/
│   │   └── styles.css
│   ├── index.tsx
│   ├── manifest.json
│   ├── popup.js
│   └── background.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commite: `git commit -m 'Minha nova feature'`.
4. Faça um push para a branch: `git push origin minha-feature`.
5. Envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
