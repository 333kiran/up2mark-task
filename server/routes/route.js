import express from 'express';
import {formData,singleRecord,getAllRecords,updateRecord,deleteRecord} from '../controller/formController.js';

const router = express.Router();

router.post('/formdata',formData)
router.get('/record/:id',singleRecord);
router.get('/records',getAllRecords);
router.put('/record/:id',updateRecord);
router.delete('/record/:id',deleteRecord);

export default router;