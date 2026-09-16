# Manual 1 — Contas GitHub e Vercel

Este manual é a primeira etapa depois do site estar pronto no computador. Sem GitHub e Vercel, o código não vai para a internet.

Faça nesta ordem. Não pule para o DNS (Manual 2) antes do primeiro deploy na Vercel.

## O que você vai ter no final

- Uma conta no GitHub
- Um repositório **privado** só com o código do site (sem PDFs da empresa)
- Uma conta Hobby (gratuita) na Vercel
- O site no ar em um endereço temporário do tipo `https://sysetech-xxxx.vercel.app`

## 1. Criar conta no GitHub

1. Abra [https://github.com/signup](https://github.com/signup).
2. Use um e-mail que você controla. Pode ser o Gmail pessoal por enquanto.
3. Confirme o e-mail quando o GitHub pedir.
4. No plano, escolha **Free**.

## 2. Criar o repositório privado

1. Entre em [https://github.com/new](https://github.com/new).
2. **Repository name:** `sysetech`.
3. Marque **Private**. Não marque Public.
4. **Não** marque “Add a README”, `.gitignore` ou license — o projeto já tem esses arquivos.
5. Clique em **Create repository**.
6. Anote a URL HTTPS, no formato `https://github.com/SEU_USUARIO/sysetech.git`.

Não arraste PDFs, contrato social, notas fiscais nem a pasta OneDrive inteira para o GitHub. Só o código do site.

## 3. Enviar o código (depois que o repositório existir)

Avise no chat do Cursor que o repositório privado foi criado e cole a URL. O push do código pode ser feito daqui, sem enviar os documentos da PJ.

Se preferir fazer o push você mesmo, no Terminal, na pasta do projeto:

```bash
git remote add origin https://github.com/SEU_USUARIO/sysetech.git
git branch -M main
git push -u origin main
```

Antes de `git push`, rode `git status` e confirme que **não** aparecem arquivos `.pdf`, `contrato social`, `NF`, `Inscrição Municipal` ou `Declaração`.

## 4. Criar conta na Vercel

1. Abra [https://vercel.com/signup](https://vercel.com/signup).
2. Escolha **Continue with GitHub**.
3. Autorize a Vercel a ver o repositório privado `sysetech`.
4. No plano, escolha **Hobby** (gratuito).

## 5. Importar o projeto

1. No dashboard da Vercel: **Add New… → Project**.
2. Encontre `sysetech` e clique em **Import**.
3. Confira:
   - Framework Preset: **Next.js**
   - Root Directory: `.` (raiz)
   - Node.js: 20.x, se a tela oferecer a opção
4. Não precisa de variáveis de ambiente neste site.
5. Clique em **Deploy**.

Espere o build ficar verde. Abra a URL `*.vercel.app` e confira:

- A home em português
- O seletor **EN** abre `/en`
- O botão de e-mail aponta para `contato@sysetech.com.br`
- A página de privacidade abre

O e-mail institucional só passa a receber mensagens depois do Manual 3 (Zoho). O site já pode ir ao ar antes disso.

## 6. Quando parar

Pare neste manual quando o `*.vercel.app` estiver no ar. Em seguida vá para o [Manual 2 — DNS no Registro.br](02-dns-registro-br.md) para ligar `www.sysetech.com.br`.
