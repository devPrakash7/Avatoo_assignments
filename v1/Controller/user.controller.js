const {performCalculation ,insertOrUpdateData} = require('../services');



exports.calculate = (req, res) => {
  
  try{
  const { action, data } = req.body;

  if (!action) {
    return res.status(400).json({ status: 'ERROR', data: null, message: '"action" is missing!' });
  }

  if (!data) {
    return res.status(400).json({ status: 'ERROR', data: null, message: '"data" is missing!' });
  }

  const result = performCalculation(action, data);
  return res.json({ status: 'OK', data: { result }, message: '' });

  }catch(err){
    console.log(err)
  }
};


exports.insertOrUpdate = async (req, res) => {

  try{
    const { id, name, email} = req.body;

    if (!name) {
      return res.status(400).json({ status: 'ERROR', data: null, message: '"name" is missing!' });
    }
  
    if (!email) {
      return res.status(400).json({ status: 'ERROR', data: null, message: '"emailId" is missing!' });
    }

      const result = await insertOrUpdateData(id, name, email);
      const message = result.id ? 'Data updated!' : 'Data inserted!';
      return res.json({ status: 'OK', data: result, message });
  }catch(err){
    console.log(err)
  }
};