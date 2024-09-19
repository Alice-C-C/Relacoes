import Produtora from "../models/produtora_model.js";

async function store(req, res) {
  try {
    await Produtora.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await Produtora.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const content = await Produtora.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    await Produtora.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroy (req,res) {
    try{
        await Produtora.findByIdAndDelete(req.params.id).exec();
        res.json();
    }catch(error){
        res.status(400).json(error);
    }
}

export default {
  store,
  index,
  show,
  update,
  destroy
};