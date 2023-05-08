function inserirAluno(total_aulas){
    var matricula = prompt('Digite a sua matrícula ...');
    var nome = prompt('Digite o seu nome ...');
    var qt_faltas = parseInt(prompt('Digite a quantidade de faltas ...'));
    var nota_b1 = parseFloat(prompt('Digite a nota do B1 ...'));
    var nota_b2 = parseFloat(prompt('Digite a nota do B2 ...'));

    var media = (nota_b1 + nota_b2) / 2;

    var percentual_faltas = qt_faltas / total_aulas;

    if(percentual_faltas > 0.25){
        var situacao = 'Reprovado por falta';
        var pfinal = 'n/a'
        var media_final = media
    }else{
        if(media >= 7){
            var situacao = 'Aprovado';
            var media_final = media;
            var pfinal = 'n/a'
        }else{
            var pfinal = parseFloat(prompt('Digite a nota da Prova de Recuperação'));

            var media_final = (pfinal + media) / 2;

            if(media_final > 5){
                var situacao = 'Aprovado';
            }else{
                var situacao = 'Reprovado por nota'
            }
        }
    }

    var tabela = document.querySelector('#tabela');

    var novaLinha = tabela.insertRow();

    novaLinha.insertCell(0).innerText = matricula;
    novaLinha.insertCell(1).innerText = nome;
    novaLinha.insertCell(2).innerText = qt_faltas;
    novaLinha.insertCell(3).innerText = nota_b1;
    novaLinha.insertCell(4).innerText = nota_b2;
    novaLinha.insertCell(5).innerText = media;
    novaLinha.insertCell(6).innerText = pfinal;
    novaLinha.insertCell(7).innerText = media_final;
    novaLinha.insertCell(8).innerText = situacao;
}