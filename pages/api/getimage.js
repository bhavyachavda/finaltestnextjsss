import con from "../../Model/db";

export default async function handler(req, res) {
   switch (req.method) { 
       case 'GET':
        try{   
             let query=`select * from users19`;
                  const data= fs.readFileSync(`./images/${req.params.id}`);
                  const ans =await con.queryRunner(query);   
              res.send(ans); 
              res.send(data); 
           } 
       catch(err){    
                  console.log(err)     
               }      
               // break;  
         //  case 'POST':   
         //   try{ 
         //      const id = req.body.id;  
         //          console.log(id)    
         //          const query=`select * from users19 where code="${id}"` 
         //                   // console.log(results);      
         //          res.send(ans);      
         //          } 
         //  catch(err){    
         //              console.log(err)   
         //           }    
         //           break;
         //             default:   
         //             res.status(405).end(`Method ${method} Not Allowed`); 
         //               break; 
  }
}


// app.get("/getImage/:id", async (req, res) => {
//    console.log(req.params);
//    res.set("Content-Type", "image/png");
//    const data = fs.readFileSync(`./images/${req.params.id}`);
//    res.send(data);
//  });