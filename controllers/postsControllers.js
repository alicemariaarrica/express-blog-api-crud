const menu = require('../db/menu.js');

const index = (req, res) => {
    res.json({ data: menu, count: menu.length })
  }


  module.exports = {index}