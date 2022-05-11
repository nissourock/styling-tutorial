import Form from './Form'
const Formwrapper = ({products, setProducts}) => { 
    return (
        <div class="flex flex-wrap justify-start flex-row bg-gradient-to-tl from-rose-100 to-rose-400">
        
        <div class="container p-10 ml-80 w-1/4 ">
        
        <Form products={products} setProducts={setProducts} />
        </div>
        </div >
    )
 };
 export default Formwrapper