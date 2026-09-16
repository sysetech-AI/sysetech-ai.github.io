# SYSETECH

Site institucional da **SYSETECH TREINAMENTOS LTDA**: treinamento in-company em IA e Engenharia de Sistemas, com consultoria e software sob encomenda.

- Endereço canônico: [https://www.sysetech.com.br](https://www.sysetech.com.br)
- Inglês: [https://www.sysetech.com.br/en](https://www.sysetech.com.br/en)
- Contato: [contato@sysetech.com.br](mailto:contato@sysetech.com.br)

## O que já está pronto neste repositório

O código do site (Next.js), a identidade visual a partir do logo, os textos em PT e EN e os manuais de go-live. Não há login, loja, formulário nem documentos da PJ neste git.

## Como rodar localmente

Node.js 20+:

```bash
nvm use
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). A versão em inglês fica em [http://localhost:3000/en](http://localhost:3000/en).

## Go-live (sua parte vs. a do Cursor)

Ordem obrigatória:

1. Você: criar GitHub (repo **privado**) e conta Vercel — [docs/manuais/01-contas-github-vercel.md](docs/manuais/01-contas-github-vercel.md)
2. Cursor: enviar o código ao GitHub (sem PDFs/NFs/contrato)
3. Você: importar o repo na Vercel e gerar o primeiro `*.vercel.app`
4. Você: apontar o DNS no Registro.br **sem trocar nameservers** — [docs/manuais/02-dns-registro-br.md](docs/manuais/02-dns-registro-br.md)
5. Você: criar `contato@sysetech.com.br` no Zoho Mail — [docs/manuais/03-zoho-mail.md](docs/manuais/03-zoho-mail.md)

Não publique inscrição municipal, contrato social, notas fiscais ou o logo da raiz OneDrive. O arquivo de marca versionado é só `public/sysetech-logo.jpg`.

## Stack

Next.js (App Router), Tailwind CSS, next-intl (PT padrão, EN em `/en`), hospedagem Vercel Hobby.
