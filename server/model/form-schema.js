import  mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/,
  },
  address: {
    type: String,
    required: true,
  },
  corporateName: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
    match: /^\d{5}(?:[-\s]\d{4})?$/,
  },
  attachments: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  mobile: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
});

const Form = mongoose.model('Form', formSchema);

export default Form;
