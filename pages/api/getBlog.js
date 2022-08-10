
import { resolveSoa } from 'dns/promises';
import fs from 'fs';
export default function getBlog(req,res){
    const {slug} = req.query
    fs.readFile(`blogData/${slug}.json`,'utf-8',(err,data)=>{
        if(err) return res.status(500).send({"error" : "No such Blog is available"});
        let fetchedFileData = JSON.parse(data);
        res.send(fetchedFileData) 
    })

}