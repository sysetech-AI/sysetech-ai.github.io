# SYSETECH

Site institucional da **SYSETECH TREINAMENTOS LTDA**: treinamento in-company em IA e Engenharia de Sistemas, com consultoria e software sob encomenda.

- Endereço canônico: [https://www.sysetech.com.br](https://www.sysetech.com.br)
- Português: [https://www.sysetech.com.br/pt/](https://www.sysetech.com.br/pt/)
- Inglês: [https://www.sysetech.com.br/en/](https://www.sysetech.com.br/en/)
- Contato: [contato@sysetech.com.br](mailto:contato@sysetech.com.br)

## O que já está pronto neste repositório

O código do site (Next.js com export estático), a identidade visual a partir do logo, os textos em PT e EN e os manuais de go-live. Hospedagem: **GitHub Pages**. Não há login, loja, formulário nem documentos da PJ neste git.

## Como rodar localmente

Node.js 20+:

```bash
nvm use
npm install
npm run dev
```

Abra [http://localhost:3000/pt](http://localhost:3000/pt). A versão em inglês fica em [http://localhost:3000/en](http://localhost:3000/en).

Para gerar o site estático:

```bash
npm run build
npm start
```

(`npm start` serve a pasta `out/`.)

## Go-live

1. Repositório público + Pages via Actions — [docs/manuais/01-contas-github-vercel.md](docs/manuais/01-contas-github-vercel.md)
2. DNS no Registro.br (A + CNAME, **sem** trocar nameservers) — [docs/manuais/02-dns-registro-br.md](docs/manuais/02-dns-registro-br.md)
3. E-mail `contato@sysetech.com.br` no Zoho Mail — [docs/manuais/03-zoho-mail.md](docs/manuais/03-zoho-mail.md)

Não publique inscrição municipal, contrato social, notas fiscais ou o logo da raiz OneDrive. Os arquivos de marca versionados são `public/sysetech-logo.jpg` e `public/sysetech-mark.jpg`.

## Stack

Next.js (App Router, `output: 'export'`), Tailwind CSS, next-intl (`/pt` e `/en`), GitHub Pages.
