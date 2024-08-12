$(document).ready(function () {
  // Função para formatar a data no formato DD/MM/YYYY
  function formatDate(date) {
    var day = date.getDate().toString().padStart(2, "0")
    var month = (date.getMonth() + 1).toString().padStart(2, "0") // Janeiro é 0!
    var year = date.getFullYear()
    return day + "/" + month + "/" + year
  }

  var form_html_assistencia =
    '<div class="w2ui-page page-0" style="top: 0px; bottom: 58px; display: block;"><div>' +
    '<div class="w2ui-field w2ui-span6 w2ui-required" style=" float: left; width:33% ; height: 10%; ">' +
    "<label>Tipo de assistência:</label>" +
    '<div><input name="in_assistencia_tipo" style="width: 100%"></div>' +
    "</div>" +
    '<div class="w2ui-field w2ui-span6 w2ui-required" style=" float: right; width:67% ; height: 10%; ">' +
    "<label>Ocorrência:</label>" +
    '<div><input name="in_apolc_dt_ocor" type="text" style="width: 50%; box-sizing: border-box;" placeholder="Data da Ocorrência" id="in_apolc_dt_ocor" class="w2field"></div>' +
    "</div>" +
    '<div class="w2ui-field w2ui-span6"style=" float: left; width:33% ; height: 10%; ">' +
    "<label>Segurado:</label>" +
    '<div><input name="in_segurado_nome" type="text" style="width: 100%" placeholder="Nome do segurado" id="in_segurado_nome"></div>' +
    "</div>" +
    '<div class="w2ui-field w2ui-span6" style=" float: right; width:67% ; height: 10%; ">' +
    "<label>CPF/CNPJ:</label>" +
    '<div><input name="in_segurado_documento" type="text" style="width: 50%" placeholder="Documento do Segurado ou Estipulante" id="in_segurado_documento"></div>' +
    "</div>" +
    '<div class="w2ui-field w2ui-span6" style=" float: left; width:33% ; height: 10%; ">' +
    "<label>Placa:</label>" +
    '<div><input name="in_veiculo_placa" type="text" style="width: 100%" placeholder="Placa do veículo" id="in_veiculo_placa"></div>' +
    "</div>" +
    '<div class="w2ui-field w2ui-span6" style=" float: left;width:67% ; height: 10%; ">' +
    "<label>Chassi:</label>" +
    '<div><input name="in_veiculo_chassi" type="text" style="width: 50%" placeholder="Chassi do veículo (últimos 6 dígitos)" id="in_veiculo_chassi"></div>' +
    "</div>" +
    '<div class="w2ui-field w2ui-span6" style="width:33%; ">' +
    "<label>Apólice:</label>" +
    '<div><input name="in_segurado_apolc" type="text" style="width: 100%" placeholder="Número da Apólice" id="in_segurado_apolc"></div>' +
    "</div>" +
    "</div></div>" +
    '<div class="w2ui-buttons">' +
    '<button name="Filtrar" class="btn ">Filtrar</button>' +
    '<button name="Assistência Avulsa" class="btn ">Assistência Avulsa</button>' +
    '<button name="Solicitar Liberação" class="btn ">Solicitar Liberação</button>' +
    "</div>"

  $("#form_consulta_inicial").w2form({
    name: "form_consulta_inicial",
    formHTML: form_html_assistencia,
  })

  // Inicializa o campo de data com W2UI
  $("#in_apolc_dt_ocor").w2field("date", { format: "dd/mm/yyyy" })

  // Captura a data atual
  var today = new Date()

  // Define o valor do input como a data atual formatada
  $("#in_apolc_dt_ocor").val(formatDate(today))
})
