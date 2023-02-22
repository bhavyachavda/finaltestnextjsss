import con from "../../Model/db";

export default async function handler(req, res) {
   switch (req.method) { 
       case 'GET':
        try{ 
            const eid = req.query.recid;
            console.log(eid);
            let query=`update users19 set isactive='false' where recid="${eid}"`;
                  const ans= await con.queryRunner(query);   
              res.send(ans);  
           } 
       catch(err){    
                  console.log(err)     
               }      
               break;  
        //   case 'POST':   
        //    try{ 
        //       const eid = req.body.recid;  
        //           console.log(eid)    
        //           const query=`update users19 set isactive='false' where recid="${eid}"` 
        //                    // console.log(results);      
        //           res.send(ans);      
        //           } 
        //   catch(err){    
        //               console.log(err)   
        //            }    
        //            break;
                     default:   
                     res.status(405).end(`Method ${method} Not Allowed`); 
                       break; 
  }
}

// app.get("/deletedata", async (req, res) => {
//     con.connect(function (err, result) {
//       console.log("hello");
//       const eid = req.query.recid;
//       console.log(eid);
//       // var request = new con.Request();
//       con.query(`update users19 set isactive='false' where recid="${eid}"`,
//         function (err, result) {
//           if (err) throw err;
  
//           res.send(result);
//           console.log(result);
//         }
//       );
//     });
//   });