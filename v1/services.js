const User= require('../models/user.model');


exports.performCalculation = (action, data) => {
    let result;
  
    switch (action) {
      case 'add':
        result = data.reduce((acc, val) => acc + val, 0);
        break;
      case 'subtract':
        result = data.reduce((acc, val) => acc - val);
        break;
      case 'multiply':
        result = data.reduce((acc, val) => acc * val, 1);
        break;
      default:
        throw new Error('Invalid action');
    }
  
    return result;
  };


exports.insertOrUpdateData = async (id, name, email) => {
  
  if (id) {
    return DB.findByIdAndUpdate(id, { name, emailId }, { new: true });
  }

  const dbEntry = new DB({ name, emailId });
  return dbEntry.save();
};

  