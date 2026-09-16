# Manual 2 — Ligar sysetech.com.br ao GitHub Pages

O site já funciona em [https://sysetech-ai.github.io/](https://sysetech-ai.github.io/). Agora o Registro.br precisa **apontar o domínio** para o GitHub. Isso não é um “redirecionamento de página do Facebook”. É DNS: um mapa que diz “quando alguém digita este nome, o computador vai nestes endereços”.

## Não use a tela “Configurar endereçamento”

Essa tela tem dois campos:

- **Endereço do site**
- **Servidor de e-mail**

Ela é o modo **simples**. Não dá para colocar os quatro IPs do GitHub e o CNAME do `www` do jeito certo. Se preencher “Servidor de e-mail” agora, também atrapalha o Zoho depois.

**Deixe os dois campos vazios.** Clique no botão **MODO AVANÇADO**.

## O que você vai criar (visão geral)

| O que a pessoa digita | O que o DNS deve fazer |
| --- | --- |
| `www.sysetech.com.br` | CNAME para `sysetech-ai.github.io` |
| `sysetech.com.br` (sem www) | Quatro registros A com IPs do GitHub |

Não altere **servidores DNS / nameservers** do domínio. Não coloque CNAME na raiz (`@`). A raiz com CNAME impede o e-mail.

Valores oficiais: [documentação do GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Passo a passo no Registro.br

1. Entre em [https://registro.br](https://registro.br) e faça login.
2. Clique no domínio **sysetech.com.br**.
3. Abra a área de DNS (pode aparecer como **DNS**, **Editar zona** ou **Configurar endereçamento**).
4. Se aparecer a tela dos dois campos, clique em **MODO AVANÇADO**.
5. Você verá uma **lista de registros**. Cada linha tem tipo, nome (host) e valor.

### Apague só o que for do site antigo

Se já existir registro **A** ou **CNAME** do site (por exemplo um IP da Locaweb, um CNAME velho, um “www” apontando para outro lugar), apague **esses**.

Não apague, se existirem:

- registros **MX** (e-mail)
- registros **TXT** de e-mail (SPF, DKIM)
- nameservers

Se a zona estiver vazia, só adicione o que está abaixo.

### Crie estes 5 registros

No modo avançado, use **Adicionar registro** (ou equivalente) cinco vezes.

**1 a 4 — raiz do domínio (sem www)**

Para cada um:

- **Tipo:** `A`
- **Nome / host:** `@`  
  Se o painel não aceitar `@`, deixe o nome **em branco** ou use `sysetech.com.br`, conforme o próprio Registro.br indicar. O alvo é a **raiz**, não `www`.
- **Valor / aponta para:** um destes IPs (um IP por registro):
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- **TTL:** deixe o padrão.

Ficam **quatro** linhas A, todas na raiz, cada uma com um IP diferente. O GitHub pede os quatro.

**5 — www**

- **Tipo:** `CNAME`
- **Nome / host:** `www`  
  Só `www`. Não escreva `www.sysetech.com.br` no nome, a menos que o painel mostre o domínio completo sozinho à direita.
- **Valor / aponta para:** `sysetech-ai.github.io.`  
  Se o Registro.br reclamar, tente sem o ponto final: `sysetech-ai.github.io`  
  **Não** coloque `https://`. **Não** coloque `/sysetech`. **Não** coloque `www.sysetech.com.br`.
- **TTL:** padrão.

Salve a zona (**Salvar**, **Publicar** ou equivalente).

## Depois: dizer ao GitHub qual é o domínio

O DNS sozinho não basta. O GitHub precisa “assumir” o nome.

1. Abra [https://github.com/sysetech-AI/sysetech-ai.github.io/settings/pages](https://github.com/sysetech-AI/sysetech-ai.github.io/settings/pages).
2. Em **Custom domain**, digite exatamente: `www.sysetech.com.br`
3. Clique em **Save**.
4. Espere de alguns minutos até algumas horas (propagação de DNS).
5. Quando o GitHub mostrar o domínio como verificado, marque **Enforce HTTPS**.

Se o GitHub disser “DNS check unsuccessful”, espere e clique em Save de novo. Não volte para a tela simples do Registro.br.

## Como saber se deu certo

No computador, Terminal:

```bash
dig CNAME www.sysetech.com.br +short
dig A sysetech.com.br +short
```

Esperado:

- `www` → `sysetech-ai.github.io.`
- raiz → os quatro IPs `185.199.108–111.153`

No navegador (pode levar até algumas horas):

- [https://www.sysetech.com.br](https://www.sysetech.com.br) abre o site, com cadeado.
- [https://www.sysetech.com.br/pt/](https://www.sysetech.com.br/pt/) em português.
- [https://www.sysetech.com.br/en/](https://www.sysetech.com.br/en/) em inglês.

## E-mail

Não preencha **Servidor de e-mail** nessa tela. O Zoho (caixa `contato@sysetech.com.br`) é o [Manual 3](03-zoho-mail.md), **depois** do site no domínio.
