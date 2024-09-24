import conn from "../conn.js"
import bcrypt from "bcrypt"

const Schema = conn.Schema

const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password:{
        type: Schema.Types.String,
        minLength:8,
        required: true
    },
    type: {
        type: Schema.Types.String,
        enum:["ADMINISTRADOR", "USUARIO"],
        required: true,
        default: "USUARIO"
    }
})

userSchema.pre("save", async function(){
    console.log(this.password)
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
})

const User = conn.model("User", userSchema)

export default User