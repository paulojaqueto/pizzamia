function showThankYouMessage(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Desabilita o botão de envio e muda o texto para "Enviando..."
  const submitButton = event.target.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  // Envia o formulário via fetch para evitar redirecionamento
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
  })
    .then((response) => {
      if (response.ok) {
        // Mostra a mensagem de agradecimento
        document.getElementById("thank-you-message").style.display = "block";
        // Esconde o formulário
        event.target.style.display = "none";
      } else {
        throw new Error("Erro ao enviar o formulário");
      }
    })
    .catch((error) => {
      console.error("Erro ao enviar o formulário:", error);
      alert(
        "Houve um problema ao enviar o formulário. Por favor, tente novamente."
      );
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = "CONTATE-ME";
    });
}
