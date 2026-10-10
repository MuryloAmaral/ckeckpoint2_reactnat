# Lista de Compras - Checkpoint 2

Aplicativo simples de lista de compras em React Native, usando `TextInput`, `Button`, `useState` e `FlatList`.

O usuário digita um produto e aperta **Adicionar**. O produto aparece na lista.

## Como executar

1. Instale o Node.js no computador e o Expo Go no celular.
2. Abra o terminal dentro da pasta do projeto.
3. Rode `npm install` para instalar as dependências.
4. Rode `npx expo start`.
5. Escaneie o QR code pelo Expo Go para abrir no celular.

**Importante:** este projeto usa o Expo SDK 54, então o aplicativo Expo Go precisa ser compatível com essa versão.

## Arquivos

- `App.js`: tela e funcionamento da lista de compras.
- `index.js`: inicia o aplicativo.
- `package.json`: dependências e comandos.
- `app.json`: nome e configurações do aplicativo.
- `.gitignore`: impede que a pasta `node_modules` seja enviada ao GitHub.

## Capturas para entrega

1. Aplicativo aberto e lista vazia.
2. Lista com um item (exemplo: Arroz).
3. Lista com cinco itens (exemplo: Arroz, Feijão, Leite, Pão e Café).

O aplicativo começa com a lista vazia toda vez que é reiniciado, pois os itens ficam somente no estado (`useState`).
