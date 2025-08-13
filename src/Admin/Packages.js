import React, { useEffect, useState } from 'react';
import axios from './component/axios';
import Adminlayout from '../layout/Adminlayout';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Packages() {
  const [list,setList]=useState([]);// this page main data
  const [cat,setCat]=useState([]);// relational continent data. It's used in select box of continent
  const [count,setCount]=useState([]);// relational country data. It's used in select box of country
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [selectedfile, setSelectedFile] = useState([]);// image file

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setInputs({
            id:'',
            continents_id:'',
            countries_id:'',
            title:'',
            description:'',
            price:'',
            duration:''
        });
        
    setShow(true);
    getContinents();// this is call countries to add option in category select box
  }
    
    

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async (e) => {
    let res = await axios.get(`packages/list.php`)
    setList(res.data);
  }

  const getContinents = async (e) => {
      let res = await axios.get(`continents/list.php`)
      setCat(res.data);
  }
    const getCountry = async (e) => {
      let res = await axios.get(`front_api/countries.php?continents_id=${e.target.value}`)
      setCount(res.data);
  }

  /* handel image/file */
  const handelFile = (e) => {
    setSelectedFile(e.target.files)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let datas={
        continents_id:e.target.continents_id.value,
        countries_id:e.target.countries_id.value,
        title:e.target.title.value,
        description:e.target.description.value,
        price:e.target.price.value,
        duration:e.target.duration.value
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
        url=`packages/update.php`;
      }else{
        url=`packages/add.php`;
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
    getContinents();// this is call continent to add option in continent select box
    setInputs(e);
    setShow(true);
  }

  const deleteUser = async(id) => {
    let res = await axios.get(`packages/delete.php?id=${id}`);
    getDatas();
  }


  return (
    <Adminlayout>
      <div className='container'>
        <h1>Packages</h1>
        
        <Button variant="primary" onClick={handleShow}>
          Add New
        </Button>
        <table className='mt-5 table table-bordered'>
          <thead>
          <tr>
            <th>#SL</th>
            <th>Continent</th>
            <th>Country</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {list.length > 0 && list.map((d, key) =>
            <tr key={key}>
              <td className="text-bold-500">{key+1}</td>
              <td>{d.cat_name}</td>
               <td>{d.count_name}</td>
              <td>{d.title}</td>
              <td>{d.description}</td>
              <td>{d.price}</td>
              <td>{d.duration}</td>
              <td><img src={`${process.env.REACT_APP_API_URL}${d.image}`} width="100px"/></td>
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
                  <label htmlFor='continents_id'>Continent </label>
                  {cat.length > 0 && (
                  <select defaultValue={inputs.continents_id} onChange={getCountry} className='form-control' name="continents_id" id='continents_id'>
                    <option value="">Select Continent</option>
                      {cat.map((d, key) =>
                        <option key={d.id} value={d.id}>{d.name}</option>
                      )}
                  </select>
                  )}
              </div>

              <div className='form-group'>
                  <label htmlFor='countries_id'>Country </label>
                  {count.length > 0 && (
                  <select defaultValue={inputs.countries_id}  className='form-control' name="countries_id" id='countries_id'>
                    <option value="">Select Country</option>
                      {count.map((d, key) =>
                        <option key={d.id} value={d.id}>{d.name}</option>
                      )}
                  </select>
                  )}
              </div>
              <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input type='text' defaultValue={inputs.title} className='form-control' name="title" id='title'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='description'>Description</label>
                  <textarea defaultValue={inputs.description} className='form-control' name="description" id='description'></textarea>
              </div>
              <div className='form-group'>
                  <label htmlFor='price'>Price</label>
                  <input type='text' defaultValue={inputs.price} className='form-control' name="price" id='price'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='duration'>Duration</label>
                  <input type='text' defaultValue={inputs.duration} className='form-control' name="duration" id='duration'/>
              </div>
              <div className='form-group'>
                  <label htmlFor='image'>Photo</label>
                  <input type='file' onChange={handelFile} className='form-control' name='image' id='image'/>
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


export default Packages;
