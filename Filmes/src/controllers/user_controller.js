import User from "../models/user_model.js";


async function store(req, res) {
  try {
    await User.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function index(req, res) {
  try {
    const content = await User.find(req.query).populate("filmes").exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    const content = await User.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body).exec();
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
}

async function destroy (req,res) {
    try{
        await User.findByIdAndDelete(req.params.id).exec();
        res.json();
    }catch(error){
        res.status(400).json(error);
    }
}

const signup = async (req,res)=>{
    try{
        const user = await User.create({
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(user)
    }catch(erro){
        res.status(400).json(erro)
    }
}

const login =async (req,res)=>{
    try{
        const user = await User.findOne({
            email: req.body.email,
        });
        if(!user){
            res.sendStatus(404)
        }
        
        res.json()
    }catch(erro){
        res.status(400).json(erro)
    }
}
export default {
  store,
  index,
  show,
  update,
  destroy,
  signup,
  login
};