import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from "./AdminNavbar";

function AvailableProducts() {
  const [products, SetProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    rating: "",
    endDate: "",
    baseprice: "",
    currPrice: "",
    Topbidder: "None",
    image: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    images : [],
    TrendingDeal: 'false',
    TopDeal: 'false',
    description : "",
  });
const [refetch, setRefetch] = useState(true);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
let formDataSubmit = {}
  useEffect(() => {
    Axios.get("https://oblinebidappbackend.onrender.com/getallproducts")
      .then((result) => SetProducts(result.data))
      .catch((err) => console.log(err));
  }, [refetch]);

  const ProductAddedNotification = () =>{
    toast.success('Product Added Successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const FailedNotification = ()=>{
    toast.error('Unable to Add Product', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name)    
    formData.currPrice = formData.baseprice ;
    formData.images = [formData.image1,formData.image2,formData.image3,formData.image4]
    console.log(formData);

    formDataSubmit = {
        id : Number(formData.id),
        name : formData.name,
        rating : Number(formData.rating) ,
        endDate : formData.endDate ,
        baseprice : Number(formData.baseprice) ,
        currPrice : Number(formData.currPrice) ,
        Topbidder : formData.Topbidder ,
        image : formData.image ,
        images : formData.images ,
        TrendingDeal : formData.TrendingDeal ,
        TopDeal : formData.TopDeal ,
        description : formData.description ,
    }

    Axios.post("https://oblinebidappbackend.onrender.com/AddProduct",{formDataSubmit}).then((result)=>{
        console.log(result);
        if(result.status === 200){
            if (result.data === "success")
            ProductAddedNotification() ;            
        else{
            FailedNotification();  
        }
        }
    })
    .catch(err=>console.log(err))

    setRefetch(!refetch)
  };
  return (
    <>
      <AdminNavbar />
      <div className="flex justify-center items-center mx-6 p-4">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <form className="lg:col-span-7" onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <label htmlFor="id">Product Id</label>
                    <input
                      required
                      type="number"
                      name="id"
                      id="id"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.id}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="name">Product Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="rating">Product Rating</label>
                    <input
                      required
                      type="number"
                      name="rating"
                      id="rating"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.rating}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="baseprice">Base Price</label>
                    <input
                      required
                      type="number"
                      name="baseprice"
                      id="baseprice"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.baseprice}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="TrendingDeal">Trending Deal</label>
                    <select
                      name="TrendingDeal"
                      id="TrendingDeal"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.TrendingDeal}
                      onChange={handleChange}
                    >
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                    </select>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="TopDeal">Top Deal</label>
                    <select
                      name="TopDeal"
                      id="TopDeal"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.TopDeal}
                      onChange={handleChange}
                    >
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="image">Image1 url</label>
                    <input
                      required
                      type="url"
                      name="image"
                      id="image"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.image}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="image1">Image2 url</label>
                    <input
                      required
                      type="url"
                      name="image1"
                      id="image2"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.image1}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="image2">Image3 url</label>
                    <input
                      required
                      type="url"
                      name="image2"
                      id="image2"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.image2}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="image3">Image4 url</label>
                    <input
                      required
                      type="url"
                      name="image3"
                      id="image3"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.image3}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="image4">Image5 url</label>
                    <input
                      required
                      type="url"
                      name="image4"
                      id="image4"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.image4}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="endDate">End Date</label>
                    <input
                      required
                      type="datetime-local"
                      name="endDate"
                      id="endDate"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.endDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="description">Product Description</label>
                    <textarea rows={5}
                      required
                      type="text"
                      name="description"
                      id="description"
                      className="transition-all flex items-center border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-7 text-center pt-2">
                    <div className="inline-flex items-end justify-center">
                      <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Add Item
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto mx-2 md:mx-4">
        <table className="w-full text-base text-left rtl:text-right text-gray-500 ">
          <thead className="text-lg text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-2 py-3 text-center">
                ID
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Product Name
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                End Date
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Rating
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Current Price
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Base Price
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                Top Bidder
              </th>
             
            </tr>
          </thead>
          <tbody>
            {products.map((Product) => {
              let x = new Date(Product.endDate);
              x = x.getTime();
              console.log(Date.now()+" : Current Date")
              x  = x > Date.now() ? "border-b bg-lime-100" : "bg-red border-b bg-red-100" ;
              
              return (
                <tr className={x}>
                  <td className="px-2 py-4 text-center">{Product.id}</td>
                  <td className="px-2 py-4 text-center">{Product.name}</td>
                  <td className="px-2 py-4 text-center">{Product.endDate}</td>
                  <td className="px-2 py-4 text-center">{Product.rating}</td>
                  <td className="px-2 py-4 text-center">{Product.currPrice}</td>
                  <td className="px-2 py-4 text-center">{Product.baseprice}</td>
                  <td className="px-2 py-4 text-center">{Product.Topbidder}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
}

export default AvailableProducts;
