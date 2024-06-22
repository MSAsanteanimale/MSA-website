require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');

const express = require('express');
const cors =require('cors');

const {getAllBanners, updateBanner, addBanner, deleteBanner, getAllProducts, updateProduct, addProduct, deleteProduct, getAllOrders, updateOder, addOder, deleteOder, getAllEmails, addEmail, getAllMessages, addMessage, connection} = require("./Mysql/index.js")
const port = process.env.PORT;
const app = express();
app.use(express.json())

const db = require("./Mysql")
app.use(cors());

// Warm-up route
app.get('/warm-up', (req, res) => {
  const sql = 'SELECT 1';
  connection.execute(sql)
    .then(() => {
      res.status(200).send("Warm-up successful");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Warm-up failed");
    });
});
// End Warm-up route
// Warm-up scheduler: Schedule the warm-up task to run every hour ('0 * * * *') or every 3 minuts ('*/3 * * * *')
cron.schedule('*/2 * * * *', () => {
  axios.get(`${process.env.BASE_URL}/warm-up`)
    .then((response) => {
      console.log('Warm-up triggered successfully');
    })
    .catch((error) => {
      console.error('Error occurred during warm-up:', error);
    });
});
// End Warm-up scheduler

// Banners ===========================================================================================================
app.get('/banners', (req, res) => {
  getAllBanners()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


app.put('/banners/:id', (req, res) => {
  updateBanner([req.body, req.params.id])
    .then((results) => {
      res.status(200).send("updated");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/banners/add', (req, res) => {
  addBanner(req.body)
    .then((results) => {
      res.status(200).send("banner ajouté avec succès");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete('/banners/:id', (req, res) => {
 const id = req.params.id;

 deleteBanner(id)
   .then((results) => {
     res.status(200).send("banner supprimé avec succès");
   })
   .catch((err) => {
     res.status(500).send(err);
   });
});

// Product ===========================================================================================================
app.get('/products', (req, res) => {
  getAllProducts()
     .then((results) => {
       res.status(200).send(results);
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });
 

app.put('/products/:id', (req, res) => {
  updateProduct([req.body, req.params.id])
     .then((results) => {
       res.status(200).send("updated");
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });

app.post('/products/add', (req, res) => {
  addProduct(req.body)
     .then((results) => {
       res.status(200).send("produit ajouté avec succès");
     })
     .catch((err) => {
       res.status(500).send(err);
     });
 });


app.delete('/products/:id', (req, res) => {
  const id = req.params.id;

  deleteProduct(id)
    .then((results) => {
      res.status(200).send("produit supprimé avec succès");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Orders ===========================================================================================================
app.get('/orders', (req, res) => {
  getAllOrders()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


app.put('/orders/:id', (req, res) => {
  updateOder([req.body, req.params.id])
    .then((results) => {
      res.status(200).send("updated");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/orders/add', (req, res) => {
  addOder(req.body)
    .then((results) => {
      res.status(200).send("Commande ajoutée avec succès");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete('/orders/:id', (req, res) => {
 const id = req.params.id;

 deleteOder(id)
   .then((results) => {
     res.status(200).send("Commande supprimée avec succès");
   })
   .catch((err) => {
     res.status(500).send(err);
   });
});

// Newsletter ===========================================================================================================
app.get('/newsletter', (req, res) => {
  getAllEmails()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/newsletter/add', (req, res) => {
  addEmail(req.body)
    .then((results) => {
      res.status(200).send("Emai ajoutée avec succès");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// Contact ===========================================================================================================
app.get('/contact', (req, res) => {
  getAllMessages()
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/contact/add', (req, res) => {
  addMessage(req.body)
    .then((results) => {
      res.status(200).send("Message ajoutée avec succès");
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, ()=>{
console.log(`listening on ${port}`);
})
