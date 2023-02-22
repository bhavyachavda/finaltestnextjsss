import con from "../../Model/db";

export default async function handler(req, res) {
  switch (req.method) {
    // case "GET":
    //   try {
    //     console.log(req.query);
    //     const code = req.query.code;
    //     const firstname = req.query.firstname;
    //     const lastname = req.query.lastname;
    //     const email = req.query.email;
    //     const gender = req.query.gender;
    //     const hobbies = req.query.hobbies;
    //     const file = req.query.file;
    //     const country = req.query.country;
    //     const dateadded = req.query.dateadded;
    //     let query = `insert into users19(code, firstname, lastname, email, gender, hobbies,photo, country, dateadded) values("${code}","${firstname}","${lastname}","${email}","${gender}","${hobbies}","${file}","${country}","${dateadded}"`;
    //     const ans = await con.queryRunner(query);
    //     res.send(ans);
    //   } catch (err) {
    //     console.log(err);
    //   }
    //   break;
    // case 'POST':
    //  try{
    //     const id = req.body.id;
    //         console.log(id)
    //         const query=`select * from users19 where code="${id}"`
    //                  // console.log(results);
    //         res.send(ans);
    //         }
    // catch(err){
    //             console.log(err)
    //          }
    //          break;

    case "GET":
      console.log("inside get ");
      try {
        console.log(req.query);
        const code = req.query.code;
        const firstname = req.query.firstname;
        const lastname = req.query.lastname;
        const email = req.query.email;
        const gender = req.query.gender;
        const hobbies = req.query.hobbies;
        const file = req.query.file;
        const country = req.query.country;
        const dateadded = req.query.dateadded;
        // var hobbie = "";
        // var newhobbies = hobbie + req.body.hobbies; 
        // var date = new Date();
        // const date1 = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");
        // var img = "public/images/" + req.body.file;
        var query = `Insert into users19(code, firstname, lastname, email, gender, hobbies, photo, country, dateadded) VALUES("${code}", "${firstname}", "${lastname}", "${email}", "${gender}", "${hobbies}", "${file}", "${country}", ${dateadded}")`;
        const ans = await con.queryRunner(query);
        res.send(ans);
        console.log(req.query);
        console.log("inserted");
      } catch (error) {
        res.status(400).json(error);
      }
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
