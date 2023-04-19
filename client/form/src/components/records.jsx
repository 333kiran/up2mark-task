import React, { useState, useEffect } from "react";
import axios from "axios";
import {Box,styled} from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Container = styled(Box)`
 width:1000px;
 padding:4rem 5rem;
`;

const InputBox = styled(Box)`
  margin:1rem 4rem;

`;

const TableBox = styled(Box)`
  padding:1rem 2rem;
  font-family:sans-sarif;

`;


const Records = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchText, setSearchText] = useState("");

const navigate = useNavigate();


  useEffect(() => {
    const fetchRecords = async () => {
      const response = await axios.get("http://localhost:8088/records");
      setRecords(response.data);
    };
    fetchRecords();
  }, []);

  useEffect(() => {
    setFilteredRecords(
      records.filter((record) =>
        record.email.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, records]);

  const handleEdit = async (id, updates) => {
    await axios.put(`http://localhost:8088/record/${id}`, updates);
    setRecords(
      records.map((record) => {
        if (record._id === id) {
          return { ...record, ...updates };
        } else {
          return record;
        }
      })
    );
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8088/record/${id}`);
    setRecords(records.filter((record) => record._id !== id));
  };

  
  const handleView = (id) => {
    const record = records.find((record) => record._id === id);
    console.log(record);
  navigate('/view')
   
  };

  return (
    <Container>
      <InputBox>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      </InputBox>
      <TableBox>
      <table>
        <thead>
          <tr style={{padding:'15px'}}>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record) => (
            <tr key={record._id}>
             <td>{record.name}</td>
              <td>{record.email}</td>
              <td>{record.address}</td>
              <td>
                <button onClick={() => handleView(record._id)}>View</button>
                <button
                  onClick={() =>
                    handleEdit(record._id, {
                      name: record.name,
                      email: record.email,
                      address: record.address,
                      billingDetails: record.billingDetails,
                    })
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(record._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </TableBox>
    </Container>
  );
};

export default Records;
