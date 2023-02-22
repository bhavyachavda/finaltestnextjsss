import con from "../../Model/db";

export default async function handler(req, res) {
    try {
      let query = `select * from users19`;
      const ans = await con.queryRunner(query);
      res.send(ans);
    } catch (err) {
      console.log(err);
    }
    // res.status(405).end(`Method ${method} Not Allowed`);
}

// app.post("/userimage", async (req, res) => {
//     const file = req.files.file;
//     const filename = file.name;
//     console.log(filename);
//     console.log("user img upload");
//     file.mv(`./images/${filename}`, (err) => {
//       if (err) {
//         console.log(err);
//         return res.status(400).send({ message: "File upload failed" });
//       }
//       return res.status(200).send({ message: `./images/${filename}`, code: 200 });
//     });
//   });