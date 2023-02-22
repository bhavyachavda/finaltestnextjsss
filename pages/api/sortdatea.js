import con from "../../Model/db";

export default async function handler(req, res) {
    try {
      let query = `select * from users19 order by dateadded`;
      const ans = await con.queryRunner(query);
      res.send(ans);
    } catch (err) {
      console.log(err);
    }
    // res.status(405).end(`Method ${method} Not Allowed`);
}