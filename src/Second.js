import randomColor from 'randomcolor';
const Second = ({lol, onClick, color}) => {
    return (<div>
  
      <button class="bg-[#97c7b8]  " //</div>color={randomColor()} 
      onClick={onClick}>
            <div class="rounded-full">
                {lol<100000000000000000000000000000000000000000000000000000000000 ? 
                (<div style={{background:randomColor()}}>
          Attention risque d'épilepsie
          </div>) : (<h1>ay jatek </h1>) 
                }
          </div>
      </button>
        </div>)
                                    };
  
  

  export default Second