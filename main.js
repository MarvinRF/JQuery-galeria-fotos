$(document).ready(function () { // selecionando o documento
    $('header button').click(function () { // adicionando um evento ao clicar no botão
        $('form').slideDown(); // deslizar para baixo
    })

    $('#botao-cancelar').click(function () {
        $('form').slideUp(); // deslizar para cima
    })
    $('form').on('submit', function (e) { // prevenindo a pagina de recarregar quando enviamos o formulario
        e.preventDefault();

        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); //val() é igual o .value
        const novoitem = $('<li style="display: none"></li>');

        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoitem);
        $(`
        <div class="overlay-imagem-link"> 
            <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoitem); //appendTo  serve pra inserir um conteúdo HTML dentro de outra tag
        $(novoitem).appendTo('ul'); 
        $(novoitem).fadeIn(1000); // adicionando o efeito para aparecer lentamente o tempo é contado em MS
        $('#endereco-imagem-nova').val('') //limpa o campo de preenchimento com jQuery
    })
})