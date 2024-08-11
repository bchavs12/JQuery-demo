$(function () {
  // 1. Criando o layout
  $("#layout").w2layout({
    name: "taskLayout",
    panels: [
      {
        type: "top",
        size: 50,
        overflow: "hidden",
        content: `
          <p style="background-color: blue; color: white; font-weight: bold; text-align: center;">
            Gerenciador de Tarefas
          </p>
        `,
      },
      { type: "right", size: 200, content: "", resizable: true }, // instanciar o layou de form aqui e todo dado do form passar para a grid
      { type: "main", content: "" }, // O conteúdo será inserido dinamicamente
    ],
  })

  // 2. Criando a grade de tarefas
  $("#taskGrid").w2grid({
    name: "taskGrid",
    columns: [
      { field: "recid", caption: "ID", size: "50px" },
      { field: "name", caption: "Nome da Tarefa", size: "30%" },
      { field: "description", caption: "Descrição", size: "40%" },
      { field: "created", caption: "Data de Criação", size: "15%" },
      { field: "status", caption: "Status", size: "15%" },
    ],
    records: [
      {
        recid: 1,
        name: "Estudar W2-UI",
        description: "Revisar exemplos e documentação.",
        created: "2024-08-10",
        status: "Pendente",
      },
      {
        recid: 2,
        name: "Implementar Layout",
        description: "Cria layout basico para o app",
        created: "2024-08-09",
        status: "Concluída",
      },
    ],
  })

  // 3. Criando o formulário de tarefas
  $("#taskForm").w2form({
    name: "taskForm",
    fields: [
      {
        field: "name",
        type: "text",
        required: true,
        html: { caption: "Nome da Tarefa", attr: 'style="width: 300px"' },
      },
      {
        field: "description",
        type: "textarea",
        required: true,
        html: {
          caption: "Descrição",
          attr: ' style="width: 300px; height: 100px"',
        },
      },
      {
        field: "status",
        type: "list",
        options: {
          items: ["Pendente", "Concluída"],
        },
        html: {
          caption: "Status",
          attr: 'style="width: 300px"',
        },
      },
    ],
    actions: {
      save: function () {
        this.save()
      },
      reset: function () {
        this.clear()
      },
    },
  })

  // 4. Inserindo a grid no painel principal do layout
  w2ui["taskLayout"].content("main", w2ui["taskGrid"])
})
