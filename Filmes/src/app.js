import filme from "./routers/filme_router.js";
import produtora from "./routers/produtora_router.js";
import e from "express";

const app = e();
const port =4000 
console.log(port)
app.use(e.json())

app.use("/filmes", filme);
app.use("/produtoras", produtora)

app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})
