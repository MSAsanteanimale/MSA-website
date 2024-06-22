const mysql = require('mysql2');
const URL= process.env.DATABASE_URL

const pool = mysql.createPool(URL);
const connection = pool.promise();

connection
  .execute('SELECT 1')
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(err);
  });

//=================================================== Banners ========================================================
const getAllBanners = () => {
    const sql = 'SELECT * FROM banner';
    return pool.promise().query(sql)
      .then(([rows, fields]) => {
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  };
  
  
  const updateBanner = (data) => {
    const sql = 'UPDATE banner SET ? WHERE id = ?';
    return pool.promise().query(sql, data);
  };
  
  const addBanner = (data) => {
    const sql = 'INSERT INTO banner SET ?';
    return pool.promise().query(sql, data);
  };
  
  const deleteBanner = (id) => {
    const sql = `DELETE FROM banner WHERE id = ?`;
    return pool.promise().query(sql, [id]);
  };

  //=================================================== products ========================================================
const getAllProducts = () => {
  const sql = 'SELECT * FROM products';
  return pool.promise().query(sql)
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};


const updateProduct = (data) => {
  const sql = 'UPDATE products SET ? WHERE id = ?';
  return pool.promise().query(sql, data);
};

const addProduct = (data) => {
  const sql = 'INSERT INTO products SET ?';
  return pool.promise().query(sql, data);
};

const deleteProduct = (id) => {
  const sql = `DELETE FROM products WHERE id = ?`;
  return pool.promise().query(sql, [id]);
};

  //=================================================== Orders ========================================================
const getAllOrders = () => {
  const sql = 'SELECT * FROM orders';
  return pool.promise().query(sql)
    .then(([rows, fields]) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

const updateOder = (data) => {
  const sql = 'UPDATE orders SET ? WHERE id = ?';
  return pool.promise().query(sql, data);
};

const addOder = (data) => {
  const sql = 'INSERT INTO orders SET ?';
  return pool.promise().query(sql, data);
};

const deleteOder = (id) => {
  const sql = `DELETE FROM orders WHERE id = ?`;
  return pool.promise().query(sql, [id]);
};
  //=================================================== newsletter ========================================================

  const getAllEmails = () => {
    const sql = 'SELECT * FROM newsletter';
    return pool.promise().query(sql)
      .then(([rows, fields]) => {
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  };

  const addEmail = (data) => {
    const sql = 'INSERT INTO newsletter SET ?';
    return pool.promise().query(sql, data);
  };
  //=================================================== Contact ========================================================

  const getAllMessages = () => {
    const sql = 'SELECT * FROM contact';
    return pool.promise().query(sql)
      .then(([rows, fields]) => {
        return rows;
      })
      .catch((err) => {
        throw err;
      });
  };

  const addMessage = (data) => {
    const sql = 'INSERT INTO contact SET ?';
    return pool.promise().query(sql, data);
  };

module.exports = { getAllBanners, updateBanner, addBanner, deleteBanner, getAllProducts, updateProduct, addProduct, deleteProduct, getAllOrders, updateOder, addOder, deleteOder, getAllEmails, addEmail, getAllMessages, addMessage, connection};