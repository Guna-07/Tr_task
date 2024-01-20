const db = require('../util/database');

module.exports = class products {
  constructor (id, item_name, price) {
    this.id = id;
    this.item_name = item_name;
    this.price = price;
  }


  static fetchAll() {
    return db.execute('SELECT * FROM products ');
  }

  static post(item_name, price) {
    const sql = 'INSERT INTO products (item_name, price, delete) VALUES (?, ?, false)';
    const params = [item_name, price];
    return db.execute(sql, params);
  }
  
  // static update(id, text, day, reminder) {
  //   const sql = 'UPDATE tasks SET text = ?, day = ?, reminder = ? WHERE id = ?';
  //   const params = [text, day, reminder, id];
  //   return db.execute(sql, params);
  // }
  
  // static delete(id) {
  //   const sql = 'DELETE FROM tasks WHERE id = ?';
  //   return db.execute(sql, [id]);
  // }
  
};
