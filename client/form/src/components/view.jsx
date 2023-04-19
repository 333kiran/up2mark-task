import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box,styled } from '@mui/material';

const Container= styled(Box)`
  width:1000px;
  padding:4rem 6rem;
`;

const View = () => {
  const [record, setRecord] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecord = async () => {
      const response = await axios.get(`http://localhost:8088/record/${id}`);
      setRecord(response.data);
    };
    fetchRecord();
  }, [id]);

  if (!record) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h1 style={{color:'maroon'}}>{record.name}</h1>
      <p><strong>Email:</strong> {record.email}</p>
      <p><strong>Address:</strong> {record.address}</p>
      <p><strong>Billing Details:</strong> {record.billingDetails}</p>
    </Container>
  );
};

export default View;

