const { User } = require('../models');

const userController = {
  getAllUser: async (req, res) => {
    try {
      const lists = await User.findAll();
      res.json(lists);
    } catch (error) {
      console.trace(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = userController;
