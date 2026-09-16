# Manual 2 — DNS no Registro.br (GitHub Pages)

Este manual aponta `www.sysetech.com.br` para o GitHub Pages **sem trocar os nameservers**. O DNS continua no Registro.br para o e-mail Zoho (Manual 3) funcionar no mesmo domínio.

Faça isso depois do workflow do GitHub Pages estar verde (Manual 1).

## Regra que não pode quebrar

Não altere os **servidores DNS / nameservers** do domínio. Você só adiciona/edita registros na zona.

Não coloque CNAME no `@` (raiz). Isso conflita com MX do e-mail.

## 1. Abrir a zona no Registro.br

1. Entre em [https://registro.br](https://registro.br).
2. Abra **sysetech.com.br**.
3. Vá em **DNS** / **Editar zona**.
4. Confirme que os nameservers ainda são os do Registro.br.

## 2. Registros do site (GitHub Pages)

Valores oficiais: [documentação do GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Apague A/CNAME antigos do **site** (não apague MX/TXT de e-mail).

Crie:

| Tipo  | Nome / host | Valor |
| ----- | ----------- | ----- |
| A     | `@` (ou em branco) | `185.199.108.153` |
| A     | `@` | `185.199.109.153` |
| A     | `@` | `185.199.110.153` |
| A     | `@` | `185.199.111.153` |
| CNAME | `www` | `sysetech-ai.github.io` |

O CNAME `www` aponta para `sysetech-ai.github.io` **sem** `/sysetech` no final.

TTL: padrão do Registro.br.

## 3. HTTPS no GitHub

1. Abra [Settings → Pages](https://github.com/sysetech-AI/sysetech/settings/pages) do repositório.
2. Em **Custom domain**, deve aparecer `www.sysetech.com.br` (vem do arquivo `CNAME` do repositório).
3. Marque **Enforce HTTPS** quando o GitHub oferecer (pode levar alguns minutos após o DNS propagar).

## 4. Validar

No Terminal:

```bash
dig A sysetech.com.br +short
dig CNAME www.sysetech.com.br +short
```

O `www` deve responder `sysetech-ai.github.io`. Os A da raiz devem ser os IPs `185.199.108–111.153`.

No navegador:

1. `https://www.sysetech.com.br` abre o site (cadeado).
2. `https://www.sysetech.com.br/pt/` é o português.
3. `https://www.sysetech.com.br/en/` é o inglês.

O apex `sysetech.com.br` no GitHub Pages **não redireciona automaticamente** para `www`. Os quatro registros A fazem o apex também servir o site. Se quiser forçar só `www`, isso fica para um ajuste posterior.

## 5. Quando parar

Pare neste manual quando `https://www.sysetech.com.br` abrir com HTTPS. Em seguida: [Manual 3 — Zoho Mail](03-zoho-mail.md).
