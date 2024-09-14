
import { db } from "../db.js";

export const getproducts = (req, res) => {
  const query1 = "SELECT * FROM products";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
export const Totalproduct = (req, res) => {
  const query1 = "SELECT count(*) FROM products";
  // in (select id from product_participate where user_id=?)
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};




export const getproduct = (req, res) => {
  const query = "select * from products where id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteproduct = (req, res) => {
  const query = "DELETE FROM products where id= ?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("product has been deleted");
  });
};

export const TotalProducts = (req, res) => {
  const query1 = "SELECT count(*) FROM products where status=1";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const insertproduct = (req, res) => {
  const query =
    "INSERT INTO products(`img`,`name`,`details`,`entry_date`,`entry_by`,`status`) values(?)";
  const date = new Date();
  const values = [
   
    req.file?.filename,
    req.body.name,
    req.body.details,
    date,
    req.body.entry_by,
    req.body.status
  ];

  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    
    return res.json("New product has been added");
  });
};
export const updateproduct = (req, res) => {
  const query =
    "UPDATE `products` SET `img`=?,`name`=?,`details`=?,`entry_date`=?,`entry_by`=?,`status`=? where id=?";
  const values = [
    req.file?.filename || req.body.image,
    req.body.name,
    req.body.details,
    new Date(),
    req.body.entry_by,
    req.body.status,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("product data has been updated");
  });
};
