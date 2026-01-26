# 📘 Testes Automatizados – Webdojo (Cypress)

## 📌 Visão Geral
Este projeto contém testes automatizados da aplicação **Webdojo**, utilizando o **Cypress** para validação de fluxos end‑to‑end (E2E).

A aplicação Webdojo e os testes automatizados estão no **mesmo repositório**, facilitando a execução local e a integração entre frontend e testes.

---

## 🛠️ Tecnologias Utilizadas
- **Node.js**
- **NPM**
- **Cypress**
- **JavaScript**

---

## 📂 Estrutura do Projeto

A estrutura principal do diretório `cypress` é organizada da seguinte forma:

```
cypress/
├── e2e/                # Casos de teste end-to-end
├── fixtures/           # Massa de dados e arquivos estáticos
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
├── support/            # Configurações e comandos customizados
│   ├── actions/        # Ações reutilizáveis (Page Actions)
│   ├── commands.js     # Comandos customizados do Cypress
│   ├── e2e.js          # Configurações globais dos testes
│   └── utils.js        # Funções utilitárias
```

### 🔹 `e2e/`
Contém os arquivos de teste automatizado (*.cy.js*), organizados por funcionalidade.

### 🔹 `fixtures/`
Armazena dados mockados e arquivos utilizados durante os testes, como:
- Dados de CEP
- Informações de consultoria
- Documentos PDF para upload

### 🔹 `support/`
Responsável por centralizar configurações e reaproveitamento de código:
- **commands.js**: comandos customizados do Cypress
- **actions/**: ações reutilizáveis (padrão Page Actions)
- **utils.js**: funções auxiliares
- **e2e.js**: carregamento global dos comandos e configurações

---

## ▶️ Executando a Aplicação Webdojo

Antes de rodar os testes automatizados, é necessário subir a aplicação Webdojo localmente.

```bash
npm run dev
```

A aplicação será iniciada em:

```
http://localhost:3000
```

---

## 🧪 Executando os Testes Automatizados

Os testes são executados via **scripts NPM**, conforme descrito abaixo.

### 🔹 Executar todos os testes (modo headless)

```bash
npm run test
```

Configuração:
- Viewport: **1440x900**
- Execução em modo headless

---

### 🔹 Executar testes no modo interativo (UI do Cypress)

```bash
npm run test:ui
```

Abre o Cypress Test Runner para execução visual dos testes.

---

### 🔹 Executar apenas os testes de Login (Desktop)

```bash
npm run test:login
```

Configuração:
- Spec: `cypress/e2e/login.cy.js`
- Viewport: **1440x900**

---

### 🔹 Executar testes de Login (Mobile)

```bash
npm run test:login:mobile
```

Configuração:
- Spec: `cypress/e2e/login.cy.js`
- Viewport: **414x896** (simulação mobile)

---

## ⚙️ Scripts Disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:ui": "npx cypress open",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

## ✅ Boas Práticas Adotadas
- Separação de responsabilidades (Actions, Utils, Fixtures)
- Reutilização de comandos customizados
- Execução por viewport (desktop e mobile)
- Organização por funcionalidade

---

## 📄 Observações Finais
- Certifique-se de que a aplicação Webdojo esteja em execução antes de iniciar os testes
- Utilize os testes mobile para validar responsividade
- Novos testes devem seguir o padrão existente em `e2e/`

---

🚀 **Projeto de testes automatizados pronto para evolução contínua!**

