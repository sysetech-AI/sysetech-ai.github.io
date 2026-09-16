# Manual 1 — GitHub Pages

O site é um export estático publicado pelo GitHub Actions no GitHub Pages. Não use Vercel.

## O que já está feito neste repositório

- Export estático do Next.js (`out/`)
- Workflow em `.github/workflows/pages.yml`
- Arquivo `public/.nojekyll` (obrigatório: o Next.js gera a pasta `_next`, e o Jekyll do GitHub ignoraria isso)

O repositório se chama `sysetech-ai.github.io` de propósito: no GitHub Pages isso publica a **raiz** `https://sysetech-ai.github.io/`, não um subcaminho `/sysetech/`.

O código já está em [github.com/sysetech-AI/sysetech-ai.github.io](https://github.com/sysetech-AI/sysetech-ai.github.io).

## 1. Tornar o repositório público

No plano Free do GitHub, Pages só funciona em repositório **público**. O site não contém PDFs, contrato nem NFs.

1. Abra [https://github.com/sysetech-AI/sysetech-ai.github.io/settings](https://github.com/sysetech-AI/sysetech-ai.github.io/settings).
2. Em **Danger Zone**, clique **Change visibility → Public**.
3. Confirme.

## 2. Ativar GitHub Pages (Actions)

1. Abra [https://github.com/sysetech-AI/sysetech-ai.github.io/settings/pages](https://github.com/sysetech-AI/sysetech-ai.github.io/settings/pages).
2. Em **Source**, escolha **GitHub Actions**.
3. Salve, se o botão aparecer.

Se a organização pedir para habilitar Pages em **Settings da org → Member privileges / Pages**, habilite.

## 3. Conferir o deploy

1. Abra [https://github.com/sysetech-AI/sysetech-ai.github.io/actions](https://github.com/sysetech-AI/sysetech-ai.github.io/actions).
2. O workflow **Deploy GitHub Pages** deve ficar verde após o push para `main`.
3. Endereço temporário (antes do DNS): [https://sysetech-ai.github.io/](https://sysetech-ai.github.io/)
4. Depois do DNS: `https://www.sysetech.com.br`.

O português fica em `/pt/`; o inglês em `/en/`. A raiz `/` redireciona para `/pt/`.

## 4. Quando parar

Pare neste manual quando o workflow estiver verde. Em seguida: [Manual 2 — DNS no Registro.br](02-dns-registro-br.md).
