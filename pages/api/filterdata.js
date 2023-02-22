import con from "../../Model/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const searchvalue = req.query.searchdata;
        const hobbies = req.query.hobbies;
        const gender = req.query.gender;
        console.log(gender);
        console.log(req.query);
        const dispstatus = req.query.dispstatus;
        let sqlquery = ``;
        if (searchvalue != "" && searchvalue) {
          sqlquery =
            sqlquery +
            ` where code like "%${searchvalue}%" or firstname like "%${searchvalue}%" or lastname like "%${searchvalue}%" or email like "%${searchvalue}%"`;
        }
        if (hobbies != "" && hobbies) {
          if (sqlquery == "") {
            sqlquery = sqlquery + ` where hobbies like "%${hobbies}%"`;
          } else {
            sqlquery = sqlquery + ` and hobbies like "%${hobbies}%" `;
          }
        }
        if (gender != "" && gender) {
          if (sqlquery == "") {
            sqlquery = sqlquery + ` where gender = "${gender}" `;
          } else {
            sqlquery = sqlquery + ` and gender = "${gender}" `;
          }
        }
        if (dispstatus != "" && dispstatus) {
          if (sqlquery == "") {
            sqlquery = sqlquery + ` where isactive = "${dispstatus}" `;
          } else {
            sqlquery = sqlquery + ` and isactive = "${dispstatus}" `;
          }
        }
        let sqlquery2 = `select * from users19 ` + sqlquery;
        console.log(sqlquery2)
        console.log(sqlquery2);
        const ans = await con.queryRunner(sqlquery2);
        res.send(ans);
      } catch (err) {
        console.log(err);
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
