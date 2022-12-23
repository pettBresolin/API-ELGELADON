const paletasService = require('../services/paleta.service.js');
const mongose = require('mongoose');
const { default: mongoose } = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findAllPaletasService();

  if (allPaletas.length == 0) {
    return res.status(404).send({ message: 'Não existe nada cadastrado!' });
  }

  res.send(allPaletas);
};

const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Id inválido!' });
  }
  const chosenPaleta = await paletasService.findByIdPaletaService(idParam);

  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }
  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;

  if (!paleta.sabor || !paleta.descricao || !paleta.foto || !paleta.preco) {
    return res
      .status(400)
      .send({ message: 'Preencha todos os campos para enviar!' });
  }

  const newPaleta = await paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Id inválido!' });
  }

  const editPaleta = req.body;

  if (
    !editPaleta.sabor ||
    !editPaleta.descricao ||
    !editPaleta.foto ||
    !editPaleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Preencha todos os campos para enviar!' });
  }

  const updatePaleta = await paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatePaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(404).send({ message: 'Id inválido!' });
  }

  await paletasService.deletePaletaService(idParam);

  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
