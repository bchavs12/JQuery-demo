$(function () {
  // Função para formatar a data no formato DD/MM/YYYY
  function formatDate(date) {
    var day = date.getDate().toString().padStart(2, "0")
    var month = (date.getMonth() + 1).toString().padStart(2, "0") // Janeiro é 0!
    var year = date.getFullYear()
    return day + "/" + month + "/" + year
  }

  $(document).ready(function () {
    // Inicializa o campo de data com W2UI
    $("#data").w2field("date", { format: "dd/mm/yyyy" })

    // Captura a data atual
    var today = new Date()

    // Define o valor do input como a data atual formatada
    $("#data").val(formatDate(today))
  })
})
