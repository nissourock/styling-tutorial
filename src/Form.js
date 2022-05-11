import React, {useState} from 'react'
const Form = ({products, setProducts}) => {
    const [formitem, setFormitem] = useState('');
    const [formprice, setFormprice] = useState('');
    const [formimage, setFormimage] = useState('');
      console.log(formitem);
      console.log(formprice);
      const handleSubmit = (event) => {
        event.preventDefault();
        setProducts([...products, {title: formitem, price:formprice, image:formimage}])
       // addProduct(newproductdata, formitem, formprice) ;
  
      }
    return (
      <form onSubmit={handleSubmit}>
      <div class="mb-6 text-3xl text-white">Add a product
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product name</label>
        <input type="text" value={formitem}
        onChange={(e) => setFormitem(e.target.value)}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="ex: Dog" required />
      </div>
      <div class="mb-6">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Product price</label>
        <input type="text" value={formprice}
        onChange={(e) => setFormprice(e.target.value)}  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="In $" required />
      </div>
      <div class="mb-6">
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link to picture</label>
        <input type="text" value={formimage}  onChange={(e) => setFormimage(e.target.value)} id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Paste an URL here"  />
      </div>
      <div class="flex items-start mb-6">
        
        
      </div>
    <button type="submit" class="text-white bg-rose-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
    </form>
    )
    
  };

  export default Form