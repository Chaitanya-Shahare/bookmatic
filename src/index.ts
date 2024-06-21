import * as dotenv from "dotenv"

dotenv.config()

console.log("Bookmatic service started!")

export const PORT = process.env.PORT || 3000
