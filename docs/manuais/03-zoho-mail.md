# Manual 3 — Zoho Mail (contato@sysetech.com.br)

Este manual cria o e-mail institucional gratuito no domínio. O site já pode estar no ar; o botão “Fale com a SYSETECH” só passa a entregar mensagem quando o MX estiver correto.

## O que o plano gratuito cobre

O **Zoho Mail Forever Free** (quando disponível no data center da sua conta) costuma incluir:

- 1 domínio
- até 5 usuários
- 5 GB por caixa
- acesso pelo **webmail** e pelo **aplicativo Zoho Mail**

Não inclui IMAP/POP/ActiveSync no plano gratuito: Outlook, Apple Mail, Gmail app e Thunderbird **não** conectam nessa faixa. Se no cadastro o Forever Free não aparecer para o Brasil, pare e avise no chat antes de assinar um plano pago.

O Gmail `sysetech2025@gmail.com` **não** entra no site. Depois que `contato@sysetech.com.br` receber e enviar, use só o institucional para assunto da empresa.

## 1. Criar a organização no Zoho Mail

1. Abra [https://www.zoho.com/mail/](https://www.zoho.com/mail/).
2. Crie a conta da organização (não uma caixa pessoal genérica, se o fluxo oferecer os dois).
3. Quando pedir o domínio, informe `sysetech.com.br`.
4. Escolha o plano **Forever Free** / **Free**, se estiver visível.

Anote em qual data center a conta ficou (EU, US, IN, AU, etc.). Os hosts MX mudam conforme o data center.

## 2. Verificar a propriedade do domínio

O wizard pede um registro **TXT** ou **CNAME** de verificação.

1. Copie o valor **exato** da tela do Zoho.
2. No Registro.br → zona DNS de `sysetech.com.br`, crie o registro no host que o Zoho indicar (`@` ou um nome tipo `zb…`).
3. Volte ao Zoho e clique em **Verify**.

Não invente o TXT. Se o wizard mostrar outro formato, o da tela vence.

## 3. Criar a caixa contato@

1. No Admin Console do Zoho Mail, crie o usuário / mailbox:
   - Endereço: `contato@sysetech.com.br`
   - Nome de exibição: `SYSETECH`
2. Defina uma senha forte e guarde-a em um gerenciador de senhas.
3. Opcional depois: um segundo usuário para a sócia-administradora (o Free permite até 5).

## 4. Apontar o correio (MX, SPF, DKIM)

Ainda no wizard **Email Configuration**, o Zoho lista MX, SPF (TXT) e DKIM (TXT). Copie cada linha e crie no Registro.br.

Cuidados:

- **Não apague** o A `@` nem o CNAME `www` da Vercel.
- CNAME **não** pode existir no `@`. MX, A e TXT da raiz convivem; CNAME na raiz não.
- Só pode haver **um** SPF. Se já existir um TXT começando com `v=spf1`, combine os `include:` numa única linha em vez de criar o segundo.
- Os MX de exemplo abaixo são os mais comuns da região US/global. **Use os da sua tela** se forem diferentes (`mx.zoho.eu`, `mx.zoho.in`, etc.).

Exemplo (só referência):

| Tipo | Host | Prioridade | Valor |
| ---- | ---- | ---------- | ----- |
| MX   | `@`  | 10         | `mx.zoho.com` |
| MX   | `@`  | 20         | `mx2.zoho.com` |
| MX   | `@`  | 50         | `mx3.zoho.com` |
| TXT  | `@`  | —          | `v=spf1 include:zohomail.com ~all` |
| TXT  | o seletor DKIM que o Zoho mostrar (ex. `zmail._domainkey`) | — | o valor `v=DKIM1; ...` da tela |

Opcional e recomendado depois que MX/SPF/DKIM verificarem: DMARC, um TXT em `_dmarc` com política inicial `v=DMARC1; p=none; rua=mailto:contato@sysetech.com.br`. Só faça isso se o wizard Zoho oferecer o valor pronto.

## 5. Verificar no Zoho

1. No Admin Console, clique em **Verify All Records** (ou o botão equivalente).
2. MX costuma validar em minutos a algumas horas; SPF/DKIM podem levar até 48 h.

No Terminal:

```bash
dig MX sysetech.com.br +short
dig TXT sysetech.com.br +short
```

Os MX devem ser os do Zoho. O TXT de SPF deve incluir o `include` do Zoho.

## 6. Teste de verdade

1. Entre no webmail Zoho com `contato@sysetech.com.br`.
2. Envie um e-mail para o seu Gmail pessoal.
3. Do Gmail, responda para `contato@sysetech.com.br`.
4. Confirme a chegada na caixa Zoho.
5. No site, clique em **Fale com a SYSETECH** e envie uma mensagem de teste.

Se o envio cair em spam, espere o DKIM verificar e refaça o teste. Não use o Gmail antigo no rodapé do site.

## 7. Quando parar

O lançamento está completo quando:

- `https://www.sysetech.com.br` abre com HTTPS
- `/en` funciona
- `contato@sysetech.com.br` recebe e envia
- o `mailto:` do site usa só esse endereço
