const controller ={};

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM car', (err, cars) =>{
            if (err) { 
                res.json(err);
            }
            res.render('cars', {
                data: cars
            });
        });
    });
};

controller.saveCar = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO car set ?', [data], (err, car) =>{
            console.log(car);
            res.redirect('/');
        });
    })
}

controller.deleteCar = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM car WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }

controller.updateCar = (req, res) => {
   const { id } = req.params;
   req.getConnection((err, conn) => {
     conn.query("SELECT * FROM car WHERE id = ?", [id], (err, car) => {
       res.render('carUpdate', {
         data: car[0]
       })
     });
   });
 };


controller.editCar = (req, res) => {
   const { id } = req.params;
   const newCar = req.body;
   req.getConnection((err, conn) => {
    conn.query('UPDATE car set ? where id = ?', [newCar, id], (err, rows) => {
         res.redirect('/');
    });
   });
};

module.exports = controller;