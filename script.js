// script.js

// Função para validar o formulário ao enviar
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    // Captura valores obrigatórios
    const nomeCliente = document.getElementById('nomeCliente').value.trim();
    const emailCliente = document.getElementById('emailCliente').value.trim();
    const nomePet = document.getElementById('nomePet').value.trim();
    const dataAgendamento = document.getElementById('dataAgendamento').value;
    const horaAgendamento = document.getElementById('horaAgendamento').value;
    const atendimento = document.querySelector('input[name="atendimento"]:checked');

    // Validação simples
    if(!nomeCliente || !emailCliente || !nomePet || !dataAgendamento || !horaAgendamento || !atendimento){
        alert("Por favor, preencha todos os campos obrigatórios e selecione o tipo de atendimento!");
        return;
    }

    // Alerta de confirmação
    alert(
        `Cadastro realizado com sucesso!\n\n` +
        `Cliente: ${nomeCliente}\n` +
        `E-mail: ${emailCliente}\n` +
        `Pet: ${nomePet}\n` +
        `Data: ${dataAgendamento}  Hora: ${horaAgendamento}\n` +
        `Atendimento: ${atendimento.value}`
    );

    // Limpa o formulário
    this.reset();
});

// Função extra: mostrar data e hora atual no console (exemplo de JS dinâmico)
function mostrarDataHoraAtual(){
    const agora = new Date();
    console.log("Data e hora atual:", agora.toLocaleString());
}
mostrarDataHoraAtual();