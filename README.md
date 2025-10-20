# IA Workspace - Gerenciador de Tarefas Inteligente 🤖

Uma aplicação web moderna e responsiva para gerenciamento de tarefas e notas, desenvolvida com HTML, CSS e JavaScript vanilla.

## 📋 Funcionalidades

- ✅ **Gerenciamento de Tarefas**
  - Adicionar novas tarefas
  - Marcar tarefas como concluídas
  - Excluir tarefas
  - Filtrar tarefas (Todas, Ativas, Concluídas)
  - Limpar todas as tarefas concluídas

- 📝 **Notas Rápidas**
  - Editor de notas integrado
  - Salvamento automático no navegador

- 💾 **Persistência de Dados**
  - Todos os dados são salvos localmente no navegador (localStorage)
  - Suas tarefas e notas permanecem mesmo após fechar o navegador

- 🎨 **Design Moderno**
  - Interface limpa e intuitiva
  - Design responsivo para todos os dispositivos
  - Animações suaves e interações agradáveis
  - Tema com gradiente roxo/azul

## 🚀 Como Usar

1. **Clone ou baixe o repositório**
   ```bash
   git clone https://github.com/renatovilaca/Workspace1.git
   cd Workspace1
   ```

2. **Abra o arquivo `index.html` no seu navegador**
   - Clique duas vezes no arquivo `index.html`, ou
   - Use um servidor web local:
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (usando npx)
     npx serve
     ```

3. **Comece a usar!**
   - Digite uma tarefa no campo de entrada
   - Clique em "Adicionar" ou pressione Enter
   - Use os filtros para visualizar diferentes grupos de tarefas
   - Adicione notas na seção "Notas Rápidas"

## 📁 Estrutura do Projeto

```
Workspace1/
│
├── index.html      # Estrutura HTML da aplicação
├── style.css       # Estilos e design responsivo
├── script.js       # Lógica da aplicação e gerenciamento de dados
└── README.md       # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS, flexbox e animações
- **JavaScript (ES6+)** - Programação orientada a objetos, LocalStorage API

## 💡 Características Técnicas

- Código limpo e bem organizado
- Programação orientada a objetos (classe TaskManager)
- Uso de localStorage para persistência de dados
- Responsive design com media queries
- Sanitização de entrada de dados (proteção XSS)
- Feedback visual para ações do usuário

## 🌟 Melhorias Futuras

Algumas ideias para expandir a aplicação:

- [ ] Categorias/tags para tarefas
- [ ] Datas de vencimento
- [ ] Prioridades de tarefas
- [ ] Modo escuro/claro
- [ ] Exportar/importar dados
- [ ] Integração com APIs de IA
- [ ] Sincronização em nuvem

## 📄 Licença

Este projeto é open source e está disponível para uso livre.

## 👨‍💻 Autor

Desenvolvido como parte do IA Workspace

---

**Aproveite o IA Workspace para organizar suas tarefas e aumentar sua produtividade! 🚀**
