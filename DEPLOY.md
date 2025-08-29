# 🚀 Deploy do MathLearn

## Deploy Automático no Netlify

### Opção 1: Deploy via GitHub (Recomendado)

1. **Criar repositório no GitHub:**
   - Acesse: https://github.com/new
   - Nome do repositório: `matematica`
   - Mantenha como público
   - NÃO inicialize com README
   - Clique em "Create repository"

2. **Enviar código para o GitHub:**
   ```bash
   git remote add origin https://github.com/cordeirotelecom/matematica.git
   git push -u origin main
   ```

3. **Deploy no Netlify:**
   - Acesse: https://app.netlify.com/
   - Clique em "Import from Git"
   - Escolha "GitHub" e conecte sua conta
   - Selecione o repositório `matematica`
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Clique em "Deploy site"

### Opção 2: Deploy Direto (Drag & Drop)

1. **Gerar build de produção:**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy no Netlify:**
   - Acesse: https://app.netlify.com/
   - Arraste a pasta `out` para a área de deploy
   - Aguarde o deploy finalizar

## 🔧 Configurações Importantes

### Variáveis de Ambiente (se necessário)
```env
NODE_VERSION=18
```

### Redirects (já configurado no netlify.toml)
O arquivo `netlify.toml` já está configurado com as regras necessárias.

## 🌐 URLs Esperadas

- **GitHub**: https://github.com/cordeirotelecom/matematica
- **Netlify**: https://[site-name].netlify.app (será gerado automaticamente)

## 📝 Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] Código enviado para o GitHub
- [ ] Site conectado no Netlify
- [ ] Deploy realizado com sucesso
- [ ] Site funcionando corretamente

## 🆘 Problemas Comuns

### Build Failed
- Verificar se todas as dependências estão instaladas
- Executar `npm run build` localmente para testar

### 404 em Rotas
- Verificar se o arquivo `netlify.toml` está na raiz do projeto
- Verificar as regras de redirect

### Performance
- O site já está otimizado com Next.js e Tailwind CSS
- Imagens serão otimizadas automaticamente pelo Next.js

---

**Site pronto para ser a referência em ensino de matemática do Brasil! 🎓✨**
