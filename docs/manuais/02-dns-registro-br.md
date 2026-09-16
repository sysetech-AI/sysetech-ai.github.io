# Manual 2 — DNS no Registro.br (site na Vercel)

Este manual aponta `sysetech.com.br` e `www.sysetech.com.br` para a Vercel **sem trocar os nameservers**. O DNS continua no Registro.br para o e-mail Zoho (Manual 3) funcionar no mesmo domínio.

Faça isso só depois do primeiro deploy (Manual 1).

## Regra que não pode quebrar

Não altere os **servidores DNS / nameservers** do domínio para os da Vercel (`ns1.vercel-dns.com` etc.). Se fizer isso, o e-mail do Zoho deixa de receber.

Você só vai **adicionar/editar registros** na zona DNS do Registro.br.

## 1. Adicionar o domínio na Vercel

1. Abra o projeto na Vercel → **Settings → Domains**.
2. Adicione `sysetech.com.br`.
3. Quando a Vercel sugerir também `www.sysetech.com.br`, aceite.
4. Defina `www.sysetech.com.br` como domínio **primário** (canonical).
5. Peça o redirecionamento do apex `sysetech.com.br` → `www.sysetech.com.br`.

A Vercel mostra um **cartão por domínio** com os registros exatos. Use **esses valores**, não uma tabela copiada de outro tutorial.

Valores típicos (confira no cartão; se for diferente, valem os da tela):

| Tipo  | Nome / host | Valor (exemplo)        | Onde |
| ----- | ----------- | ---------------------- | ---- |
| A     | `@` ou em branco | `76.76.21.21`     | apex `sysetech.com.br` |
| CNAME | `www`       | o alvo do cartão (ex. `cname.vercel-dns.com` ou um hostname `*.vercel-dns-0xx.com`) | `www.sysetech.com.br` |

Não coloque CNAME no `@` (raiz). No DNS isso conflita com MX do e-mail.

## 2. Abrir a zona no Registro.br

1. Entre em [https://registro.br](https://registro.br) com o login da conta que registrou o domínio.
2. Abra **sysetech.com.br**.
3. Vá em **DNS** / **Editar zona**.
4. Confirme que os nameservers ainda são os do Registro.br (em geral `a.auto.dns.br` e `b.auto.dns.br`, ou o par que o painel já mostrar).

## 3. Ajustar registros do site

1. Se existir um A ou CNAME antigo apontando o site para outro lugar, **apague só esses**. Não apague registros de e-mail se já existirem.
2. Crie o A da raiz (`@` / em branco) com o IP do cartão da Vercel.
3. Crie o CNAME `www` com o alvo do cartão da Vercel.
4. Salve a zona.

TTL: deixe o padrão do Registro.br.

## 4. Esperar e validar

A propagação costuma levar de alguns minutos a algumas horas.

Na Vercel, em **Settings → Domains**, clique em **Refresh**. Quando estiver certo, o cartão fica **Valid Configuration** e o certificado HTTPS aparece sozinho.

No Terminal:

```bash
dig A sysetech.com.br +short
dig CNAME www.sysetech.com.br +short
```

O A deve ser o IP da Vercel; o CNAME deve ser o alvo que o cartão mostrou.

No navegador:

1. `https://www.sysetech.com.br` abre o site (cadeado).
2. `https://sysetech.com.br` redireciona para `www`.
3. `https://www.sysetech.com.br/en` abre a versão em inglês.

## 5. Se a Vercel pedir verificação TXT

Às vezes o domínio precisa de um registro TXT temporário (quando o domínio já foi usado em outra conta). Copie o TXT **exato** do cartão e crie no Registro.br no host que a Vercel indicar (`@` ou `_vercel`). Depois clique em Verify.

## 6. Quando parar

Pare neste manual quando `https://www.sysetech.com.br` abrir com HTTPS. Em seguida vá para o [Manual 3 — Zoho Mail](03-zoho-mail.md).
