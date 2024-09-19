import Filme from "../models/filme_model.js";

async function store(req, res) {
  try {
    await Filme.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await Filme.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const content = await Filme.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    await Filme.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}
async function destroy (req,res) {
    try{
        await Filme.findByIdAndDelete(req.params.id).exec();
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