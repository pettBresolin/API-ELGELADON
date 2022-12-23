const paletasService = require('../services/paleta.service');

const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();

  if (paletas.length == 0) {
    return res.status(404).send({ message: 'Não existe nada cadastrado!' });
  }

  res.send(paletas);
};

const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id);

  if (!parametroId) {
    return res.status(404).send({ message: 'Id inválido!' });
  }
  const escolhaPaleta = paletasService.findByIdPaletaService(parametroId);

  if (!escolha) res.send(escolhaPaleta);
  {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }
};

const createPaletaController = (req, res) => {
  const paleta = req.body;

  if (!paleta.sabor || !paleta.descricao || !paleta.foto || !paleta.preco) {
    return res
      .status(400)
      .send({ message: 'Preencha todos os campos para enviar!' });
  }

  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(404).send({ message: 'Id inválido!' });
  }

  const paletaEdit = req.body;

  if (
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Preencha todos os campos para enviar!' });
  }

  const updatePaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatePaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(404).send({ message: 'Id inválido!' });
  }

  const escolhaPaleta = paletasService.deletePaletaService(idParam);

  if (!escolhaPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
