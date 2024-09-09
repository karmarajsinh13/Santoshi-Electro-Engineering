import { db } from "../db.js";

export const getContacts = (req, res) => {
  const query1 = `SELECT *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date FROM contact`;
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getContact = (req, res) => {
  const query = `select *,DATE_FORMAT(entry_date, "%y-%m-%d") AS entry_date from contact where id=?`;

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};
// export const getContact = (req, res) => {
//   const query = "select a.firstname , b.email , b.msg from contact b , user a where b.lastname = a.lastname and b.id=?";

//   db.query(query, [req.params.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data[0]);
//   });
// };

export const deleteContact = (req, res) => {
  const query = "DELETE FROM contact where id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact has been deleted");
  });
};

export const insertContact = (req, res) => {
  const query =
    "INSERT INTO contact(`firstname`,`lastname`,`email`,`phone`,`msg`,`entry_date`,`status`) values(?)";
  const date = new Date();
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.phone,
    req.body.msg,
    date,
    req.body.status,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New contact has been added");
  });
};
export const updateContact = (req, res) => {
  const query =
    "UPDATE `contact` SET `firstname`=? ,`lastname`=?, `email`=?,`phone`=?, `msg`=? ,`entry_date`=?,`status`=? where id=?";
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.phone,
    req.body.msg,
    new Date(),
    req.body.status,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Contact data has been updated");
  });
};
