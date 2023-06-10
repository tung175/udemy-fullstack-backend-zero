const connection = require('./configs/database')

const getHomePage = (req, res) =>{
    connection.query(
        'SELECT * FROM Users u',
        function(err, results, fields) {
          console.log(results);
         
        }
    );

    res.render('test.ejs')
}

module.exports = {
    getHomePage
}