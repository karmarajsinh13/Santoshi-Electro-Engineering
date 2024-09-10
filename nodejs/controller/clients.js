import { db } from "../db.js";


export const getclientss = (req, res) => {
  const query1 = 'SELECT *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date FROM clients';
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
// export const Totalimages = (req, res) => {
//     const query4 = "SELECT count(*) FROM clients";
    
//     db.query(query4, (err, data) => {
//       if (err) {
//         return res.json(err);
//       } else {
//         return res.json(data);
//       }
//     });
//   };

export const getclients = (req, res) => {
  const query = 'select *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date from clients where id=?';

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteclients = (req, res) => {
  const query = "DELETE FROM clients where id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("clients has been deleted");
  });
};

export const insertclients = (req, res) => {
  const query =
    "INSERT INTO clients(`img`,`client_name`,`entry_date`,`entry_by`) values(?)";
    const date = new Date();
  const values = [
        req.file?.filename,
        req.body.client_name,

        date,
        req.body.entry_by,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New clients has been added");
  });
};
export const updateclients = (req, res) => {
  const query =
    "UPDATE `clients` SET `img`=?,`client_name`=? ,`entry_date`=?,`entry_by`=?  where id=?";
  const values = [
         req.file?.filename || req.body.img,
         req.body.client_name,
       
        new Date(),
        req.body.entry_by,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("clients data has been updated");
  });
};
