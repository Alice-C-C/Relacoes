import filme from "./routes/filme-route.js";
import produtora from "./routes/produtora-route.js";
import e from "express";
import "dotenv/config";

const app = e();

app.use(e.json())

app.use("/filmes", filme);
app.use("/produtoras", produtora)

app.listen(process.env.API_PORT, () => {
    console.log(`Server running in port ${process.env.API_PORT}`)
})