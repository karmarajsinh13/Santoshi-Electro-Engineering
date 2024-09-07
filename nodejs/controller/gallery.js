import { db } from "../db.js";


export const getgallerys = (req, res) => {
  const query1 = 'SELECT *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date FROM gallery';
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};
export const Totalimages = (req, res) => {
    const query4 = "SELECT count(*) FROM gallery";
    
    db.query(query4, (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json(data);
      }
    });
  };

export const getgallery = (req, res) => {
  const query = 'select *,DATE_FORMAT(entry_date, "%d-%m-%y") AS entry_date from gallery where id=?';

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletegallery = (req, res) => {
  const query = "DELETE FROM gallery where id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("gallery has been deleted");
  });
};

export const insertgallery = (req, res) => {
  const query =
    "INSERT INTO gallery(`img`,`title`,`details`,`entry_date`,`entry_by`) values(?)";
    const date = new Date();
  const values = [
        req.file?.filename,
        req.body.title,
        req.body.details,
        date,
        req.body.entry_by,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New gallery has been added");
  });
};
export const updategallery = (req, res) => {
  const query =
    "UPDATE `gallery` SET `img`=?,`title`=? ,`details`=?,`entry_date`=?,`entry_by`=?  where id=?";
  const values = [
         req.file?.filename || req.body.img,
         req.body.title,
        req.body.details,
        new Date(),
        req.body.entry_by,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("gallery data has been updated");
  });
};
