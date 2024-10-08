var cadastrar = function(url) {
    var boletim = {
        localOcorrido: {
            rua: $("#rua").val(),
            numero: $("#numero").val(),
            bairro: $("#bairro").val(),
            cidade: $("#cidade").val(),
            estado: $("#estado").val()
        },
        veiculoFurtado: {
            emplacamento: {
                codigo: $("#placa").val(),
                estado: $("#estadoPlaca").val(),
                cidade: $("#cidadePlaca").val()
            },
            anoFabricacao: $("#ano").val(),
            cor: $("#cor").val(),
            marca: $("#marca").val(),
            tipoVeiculo: $("#tipo").val()
        },
        envolvidos: {
            nome: $("#nome").val(),
            email: $("#email").val(),
            telefone: $("#telefone").val()
        },
        crime: $("#crime").val(),
        dataOcorrido: $("#data").val(),
        periodoOcorrido: $("#periodo").val()
    };

    $.ajax({
        url: url,
        type: 'POST',
        async: true,
        contentType: 'application/json',
        data: JSON.stringify(boletim),
        success: function (resposta) {
            $("#message").empty();
            $("#message").html(resposta);
        },
        error: function (xhr, status, erro) {
            $("#message").empty();
            $("#message").append(xhr.responseText)
        }
    });
};

$(document).ready(function () {
    $("#btnCadastrar").click(function () {
        cadastrar("http://localhost:8080/api/boletins");
    });
}); 