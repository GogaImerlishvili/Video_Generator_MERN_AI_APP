import express from "express"
import uniqid from "uniqid"
import fs from "fs"

const app = express();

app.get("/test", (req, res) => {
    return res.json("test ok1")
})

app.get("/create-story", (req, res) => {
    const url = req.query.url
    const dir = uniqid()
    const path = "./stories/" + dir
    fs.mkdirSync(path,{recursive:true})
    console.log({ url })
    return res.json("ok")
})

app.listen(8080, () => console.log("Lidstening on port 8080"))