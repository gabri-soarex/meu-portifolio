# 💼 Portfólio — Gabriel Soares Campos

[![LinkedIn](https://img.shields.io/badge/LinkedIn-gabriel--soares7-0A66C2?logo=linkedin)](https://www.linkedin.com/in/gabriel-soares7)
[![GitHub](https://img.shields.io/badge/GitHub-gabri--soarex-181717?logo=github)](https://github.com/gabri-soarex)

Portfólio pessoal de **DevOps / Cloud AWS**: responsivo, com tema claro/escuro, filtros de projetos e animações — feito com **HTML, CSS e JavaScript puros** (sem build, sem dependências) e hospedado na **AWS (S3 + CloudFront)** com deploy automático via **GitLab CI/CD**.

🔗 **Acesse:** https://SEU-DOMINIO-OU-CLOUDFRONT.cloudfront.net

## ✨ Funcionalidades

- Totalmente responsivo (de celulares de 320px a monitores ultrawide)
- Tema claro/escuro (respeita a preferência do sistema)
- Efeito de digitação no título
- Filtro de projetos por categoria
- Seção de certificados com destaque para a certificação AWS
- Animações ao rolar a página
- Todo o conteúdo editável em um único arquivo: `assets/js/data.js`
- Deploy automático na AWS a cada `git push`

## 📁 Estrutura

```
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/data.js        ← suas informações ficam aqui
│   ├── js/main.js
│   └── img/              ← sua foto e imagens dos projetos
└── .gitlab-ci.yml           ← pipeline de deploy
```

## ✏️ Personalizando

1. Abra `assets/js/data.js` e troque nome, textos, skills, projetos, experiência e links.
2. Coloque sua foto em `assets/img/` e ajuste o campo `avatar` (ou use `https://github.com/SEU-USUARIO.png`).
3. (Opcional) Coloque seu currículo em PDF em `assets/` e preencha o campo `cv`.
4. Abra o `index.html` no navegador para ver o resultado.

---

## ☁️ Hospedando na AWS

Duas opções — escolha uma.

### Opção A — AWS Amplify (mais fácil, ~5 min)

1. No console da AWS, abra **AWS Amplify** → **Create new app** → **GitHub** ou **GitLab**.
2. Autorize e selecione este repositório e a branch `main`.
3. Em build settings, não precisa de comando de build (site estático). Diretório de saída: `/`.
4. Clique em **Save and deploy**. Pronto: a cada `push` o Amplify publica sozinho e já te dá HTTPS.

> Se escolher Amplify, pode apagar o arquivo `.gitlab-ci.yml`.

### Opção B — S3 + CloudFront + GitLab CI/CD (mais "profissional", ótimo para mostrar no currículo)

> O pipeline fica em `.gitlab-ci.yml`. Você pode manter o código no GitLab (onde o pipeline roda) e também enviar uma cópia para o GitHub como vitrine:
> ```bash
> git remote add gitlab https://gitlab.com/SEU-USUARIO/portfolio.git
> git push gitlab main   # dispara o deploy
> git push origin main   # GitHub (vitrine)
> ```

#### 1. Criar o bucket S3
- Console → **S3** → **Create bucket** (ex.: `meu-portfolio-site`), região `us-east-1`.
- Mantenha **Block all public access ativado** (o CloudFront é quem vai acessar).

#### 2. Criar a distribuição CloudFront
- Console → **CloudFront** → **Create distribution**.
- **Origin**: selecione o bucket S3 → em *Origin access* escolha **Origin access control (OAC)** → *Create new OAC*.
- **Viewer protocol policy**: *Redirect HTTP to HTTPS*.
- **Default root object**: `index.html`.
- Crie a distribuição e **copie a policy** que o CloudFront sugere → cole em S3 → seu bucket → *Permissions* → *Bucket policy*.
- Anote o **Distribution ID** e o domínio `xxxx.cloudfront.net`.

#### 3. Permitir que o GitLab faça deploy (OIDC — sem guardar chaves de acesso)
1. **IAM** → *Identity providers* → *Add provider* → **OpenID Connect**
   - Provider URL: `https://gitlab.com`
   - Audience: `sts.amazonaws.com`
2. **IAM** → *Roles* → *Create role* → *Web identity* → escolha o provider `gitlab.com`, audience `sts.amazonaws.com`.
3. Edite a *trust policy* da role para aceitar só o seu projeto na branch `main`:

```json
"Condition": {
  "StringEquals": { "gitlab.com:aud": "sts.amazonaws.com" },
  "StringLike":   { "gitlab.com:sub": "project_path:SEU-USUARIO/portfolio:ref_type:branch:ref:main" }
}
```

4. Anexe uma policy inline com o mínimo necessário (troque os valores):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::meu-portfolio-site"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:DeleteObject", "s3:GetObject"],
      "Resource": "arn:aws:s3:::meu-portfolio-site/*"
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::SEU-ACCOUNT-ID:distribution/SEU-DISTRIBUTION-ID"
    }
  ]
}
```

5. Copie o **ARN da role**.

#### 4. Configurar as variáveis no GitLab
No projeto: **Settings → CI/CD → Variables → Add variable**

| Nome | Valor |
|---|---|
| `AWS_ROLE_ARN` | ARN da role criada no passo 3 |
| `S3_BUCKET` | nome do bucket (ex.: `meu-portfolio-site`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | ID da distribuição |
| `AWS_DEFAULT_REGION` | região do bucket (ex.: `us-east-1`) |

#### 5. Publicar
```bash
git add .
git commit -m "Meu portfólio"
git push gitlab main
```
Acompanhe em **Build → Pipelines** no GitLab. Ao terminar, acesse `https://xxxx.cloudfront.net`. 🎉


#### (Opcional) Domínio próprio
Registre/aponte o domínio no **Route 53**, gere um certificado gratuito no **ACM** (região `us-east-1`) e adicione o domínio em *Alternate domain names* da distribuição CloudFront.

## 💰 Custo
Para um portfólio, S3 + CloudFront normalmente fica dentro do **Free Tier** ou custa centavos por mês. Configure um alerta em **Billing → Budgets** por segurança.

## 🛠️ Tecnologias
HTML5 · CSS3 · JavaScript · AWS S3 · AWS CloudFront · AWS IAM (OIDC) · GitLab CI/CD
