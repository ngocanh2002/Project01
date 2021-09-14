const mysql = require('mysql');

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: "developer",
  password: "abc@123456",
  database: "ddv_vmg_tester"
});

con.connect(function (err){
    
    if (err) throw err.stack;
  
    const sql = "INSERT INTO Product(ID, Name, Price) values('8','Iphone13','40000000')";
    const select_record= "SELECT *FROM Product";

    // 1/ Select products which name is 'Iphone'
    const task_1 = "SELECT * FROM Product WHERE Name = 'Iphone'";

    // 2/ Select a list of products which price is from 15M to 30M. And order that list by ascending and descending
    const task_2 = "SELECT * FROM Product where price >= 15000000 AND price <= 30000000 ORDER BY Price DESC";
    // 3/ Search products which has 'No'
    const task_3 = "SELECT * FROM Product where Name like 'No%'";

    console.log('Task 1');
    con.query(task_1, function (err,results) {
        if (err) throw err;
        console.log(results);
    });
    console.log('Task 2');
    con.query(task_2, function (err,results) {
      if (err) throw err;
      console.log(results);
    });
    console.log('Task 3');
    con.query(task_3, function (err,results) {
      if (err) throw err;
      console.log(results);
    });
    

});


