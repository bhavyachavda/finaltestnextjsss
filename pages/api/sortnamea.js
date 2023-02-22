import con from "../../Model/db";

export default async function handler(req, res) {
      try {
        let query = `select * from users19 order by firstname`;
        const ans = await con.queryRunner(query);
        res.send(ans);
      } catch (err) {
        console.log(err);
      }
      // res.status(405).end(`Method ${method} Not Allowed`);
}

// app.get("/sortnamea", (req, res) => {
//   console.log("sort by name   ");
//   con.query(
//     `select * from users19 order by firstname`,
//     function (err, results) {
//       if (err) throw err;
//       console.log(results);
//       res.send(results);
//     }
//   );
// });
