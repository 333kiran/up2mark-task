import Form from '../model/form-schema.js'

export const formData = async (req, res) => {
  try {
    const form = new Form({
      date: req.body.date,
      email: req.body.email,
      address: req.body.address,
      corporateName: req.body.corporateName,
      serviceName: req.body.serviceName,
      postalCode: req.body.postalCode,
      attachments: req.file ? req.file.path : null,
      amount: req.body.amount,
      mobile: req.body.mobile,
    });

    const errors = form.validateSync();

    if (errors) {
      return res.status(400).json({ message: errors.message });
    }

    await form.save();

    res.status(201).json({ message: 'Form data saved' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export const getAllRecords = async(req,res)=> {
    try{
      const records = await Form.find();
      res.status(200).json(records);
    }catch(error){
        res.status(500).json({message: error.message});
        console.log(error );
    }
}

export const singleRecord = async(req,res)=> {
    try{
        const specificRecord = await Form.find({id:req.params.id});
    res.status(200).json(specificRecord);

    }catch(error){
    res.status(500).json({message: error.message});
     
    }
}

export const updateRecord = async(req,res) => {
    try{
     const updateData = await Form.updateOne({id:req.params.id});
     res.status(200).json(updateData);
    }catch(error){
    res.status(500).json({message: error.message});

    }
}

export const deleteRecord = async(req,res)=> {
    try{
        const deleteData = await Form.deleteOne({id:req.params.id});
        res.status(200).json(deleteData);

    }catch(error){
    res.status(500).json({message: error.message});
      
    }
}
