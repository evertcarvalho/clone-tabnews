function status(request, response) {
  response.status(200).json({ chave: "mensagem de teste" });
}

export default status;
