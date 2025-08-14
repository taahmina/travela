import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cities() {
  const [list,setList]=useState([]);
  const [count,setCount]=useState([]);// relational category data. It's used in select box of category
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [selectedfile, setSelectedFile] = useState([]);// image file

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            countries_id:'',
            name:''
        });
    setShow(true);
    getCountries();// this is call category to add option in category select box
  }

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`cities/list.php`)
    setList(res.data);
  }

const getCountries = async (e) => {
      let res = await axios.get(`countries/list.php`)
      setCount(res.data);
  }
/* handel image/file */
  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        countries_id:e.target.countries_id.value,
        name:e.target.name.value
    }
    datas ={...inputs, ...datas} // marge two object
   
    const formData = new FormData();
     
     /* handel image/file */
    for (let i = 0; i < selectedfile.length; i++) {
      formData.append('files[]', selectedfile[i])
    }

    for (const property in datas) {
      formData.append(property, datas[property])
    }

    try{
      let url='';
      if(datas.id!=''){
        url=`cities/update.php`;
      }else{
        url=`cities/add.php`;
      }
     
      let response= await axios.post(url,formData);
     
      if(response.data.error == 1){
        alert(response.data.message)
      }else{
        getDatas();
        handleClose()
      }
    } 
    catch(e){
      console.log(e);
    }
  }
  /* function for edit */
  const showEdit=(e) => {
     getCountries();// this is call category to add option in category select box
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`cities/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Cities</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Country</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.count_name}</td>
              <td>{d.name}</td>
              <td>
                  <Button variant="primary" onClick={()=>{showEdit(d)}}>Edit</Button>
                  <Button variant="danger" onClick={()=>{deleteUser(d.id)}}>Delete</Button>
              </td>
            </tr>
          )}
          </tbody>
        </table>


      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add New</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='form-group'>
                  <label htmlFor='countries_id'>Country </label>
                  {count.length > 0 && (
                  <select defaultValue={inputs.countries_id} className='form-control' name="countries_id" id='countries_id'>
                    <option value="">Select Country</option>
                      {count.map((d, key) =>
                        <option key={d.id} value={d.id}>{d.name}</option>
                      )}
                  </select>
                  )}
              </div>
              <div className='form-group'>
                  <label htmlFor='name'>Name</label>
                  <input type='text' defaultValue={inputs.name} className='form-control' name="name" id='name'/>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type='submit'>
              Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      </div>
    </Adminlayout>
    
  );
}


export default Cities;
