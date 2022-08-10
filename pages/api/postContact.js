import fs from 'fs';
export default async function handler(req,res){
    if(req.method==="POST"){
        const presentContactList = await fs.promises.readdir('postedContact');
        const addingFileToDir = await fs.promises.writeFile(`postedContact/${presentContactList.length+1}.json`,JSON.stringify(req.body));
        res.status(200).json({"success" : "Response Submitted successfully. Thanks for your feedback"})
    }else{
        res.status(500).send({"error" : "Error on backend!!"})
    }
}