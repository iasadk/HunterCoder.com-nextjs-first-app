// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs'
export default async function handler(req, res) {
  let fileContentList = [];
  let data = await fs.promises.readdir("blogData");
  data = data.slice(0,req.query.count);
  for (let i = 0; i < data.length; i++) {
    const fileName = data[i];
    let fileContent = await fs.promises.readFile(('blogData/'+fileName),'utf-8');
    fileContentList.push(JSON.parse(fileContent));
  }

  res.json(fileContentList)
  
}
