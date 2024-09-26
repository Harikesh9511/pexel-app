import { useLocation, useNavigate } from "react-router-dom";
const Navbar = ({setSearch}) => {
  const navigate = useNavigate()
  const location = useLocation()



  return (
    <>
      <div className="nav mt-3">
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>
        {setSearch("nature");
          navigate("/");
        }
      }
        >Nature</div>
        <div className="button btn btn-outline-primary mx-3" 
        onClick={()=>{
          setSearch("Travel")
          navigate("/")
        }
        }>Travel</div>
        <div className="button btn btn-outline-info mx-3" 
        onClick={()=>{
          setSearch("city")
          navigate("/")
        }
        }>City</div>
        <div className="button btn btn-outline-secondary mx-3" 
        onClick={()=>{
          setSearch("car")
          navigate("/")
          }}>Car</div>
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>{
          setSearch("animal")
          navigate("/")
          }}>Animal</div>
        <div className="button btn btn-outline-dark text-light mx-3" 
        onClick={()=>{
          setSearch("technology")
          navigate("/")
        }}>
          Technology
        </div>
        <div className="button btn btn-outline-warning mx-3" 
        onClick={()=>{
          setSearch("finance")
          navigate("/")
        }}>
          Buisness & Finance
        </div>
        <div className="button btn btn-outline-primary mx-3" 
        onClick={()=>{
          setSearch("tokyo")
          navigate("/")
        }
        }>Tokyo</div>
        <div className="button btn btn-outline-info mx-3" 
        onClick={()=>{
          setSearch("dubai")
          navigate("/")
        }
        }>Dubai</div>

        {location.pathname=='/saved'?(
           <div className="button btn btn-warning mx-3" onClick={()=>navigate('/')}>Home</div>
        ): (
        <div className="button btn btn-warning mx-3" onClick={()=>navigate('/saved')}>Saved</div>
        )}
       

     

      </div>
      
      <div className="container my-4 " style={{width: '780px'}}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control bg-dark text-light"
            id="validationCustom01"
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
