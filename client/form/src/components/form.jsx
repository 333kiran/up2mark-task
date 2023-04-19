import React, { useState } from 'react';
import {TextField,Button,Box,Typography,styled} from '@mui/material';

const ContainerBox = styled(Box)`
 margin:2rem 8rem;
 width:1500;
 border:1px solid grey;
 
`;

const InputBox = styled(TextField)`
 margin-top:10px;
`;

const SubmitButton = styled(Button)`
 margin:1rem 0 2rem 1rem;
`;

const FormBox = styled(Box)`
  width:500px;
  margin:2rem 2rem;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    date: '',
    email: '',
    address: '',
    corporateName: '',
    serviceName: '',
    postalCode: '',
    attachments: null,
    amount: '',
    mobile: '',
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'file' ? target.files[0] : target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8088/formdata', {
        method: 'POST',
        body: new FormData(event.target),
      });

      const data = await response.json();
     alert('form submitted sucessfully');
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ContainerBox maxWidth="sm" >
      <Box mt={5} mb={5}>
        <Typography variant="h4" align="center">
          Invoice Form
        </Typography>
      </Box>
      <FormBox>
      <form onSubmit={handleSubmit}>
        <InputBox
          fullWidth
          label="Date"
          name="date"
          type="date"
          onChange={handleInputChange}
          value={formData.date}
        />
        <InputBox
          fullWidth
          label="Email"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <InputBox
          fullWidth
          label="Address"
          name="address"
          onChange={handleInputChange}
          value={formData.address}
        />
        <InputBox
          fullWidth
          label="Corporate Name"
          name="corporateName"
          onChange={handleInputChange}
          value={formData.corporateName}
        />
        <InputBox
          fullWidth
          label="Service Name"
          name="serviceName"
          onChange={handleInputChange}
          value={formData.serviceName}
        />
        <InputBox
          fullWidth
          label="Postal Code"
          name="postalCode"
          onChange={handleInputChange}
          value={formData.postalCode}
        />
        <InputBox
          fullWidth
          label="Attachments"
          name="attachments"
          type="file"
          onChange={handleInputChange}
        />
        <InputBox
          fullWidth
          label="Amount"
          name="amount"
          type="number"
          onChange={handleInputChange}
          value={formData.amount}
        />
        <InputBox
          fullWidth
          label="Mobile"
          name="mobile"
          onChange={handleInputChange}
          value={formData.mobile}
        />
        <SubmitButton type="submit" variant="contained" color="primary">
          Submit
        </SubmitButton>
      </form>
      </FormBox>
    </ContainerBox>
  );
};

export default Form;

