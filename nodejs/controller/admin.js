import { db } from "../db.js";

export const getAdmins = (req, res) => {
  const query1 = "SELECT * FROM admin";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getAdmin = (req, res) => {
  const query = "select * from admin where id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteAdmin = (req, res) => {
  const query = "DELETE FROM admin where id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Admin has been deleted");
  });
};

export const insertAdmin = (req, res) => {
  const query =
    "INSERT INTO admin(`img`,`firstname`,`lastname`,`email`,`phone`,`dob`,`gender`,`password`,`confirm_password`,`entry_date`,`status`) values(?)";
  const values = [
    req.file?.filename,
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.phone,
    req.body.dob,
    req.body.gender,
    req.body.password,
    req.body.confirm_password,
    req.body.entry_date,
    req.body.status,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New Admin has been added");
  });
};
export const updateAdmin = (req, res) => {
  const query =
    "UPDATE `admin` SET `img`=?,`firstname`=?,`lastname`=?,`email`=?,`phone`=?,`dob`=?,`gender`=?,`password`=?,`confirm_password`=?,`entry_date`=?,`status`=? where id=?";
  const values = [
    req.file?.filename || req.body.photo,
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.phone,
    req.body.dob,
    req.body.gender,
    req.body.password,
    req.body.confirm_password,
    req.body.entry_date,
    req.body.status,

  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Admin data has been updated");
  });
};
