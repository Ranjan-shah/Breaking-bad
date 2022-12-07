import spinner from "../images/spinner.gif";

const Spinner =()=>{
    return(
        <img src={spinner} alt="loading" style={{
            width:'200px' ,
            margin:"auto" ,
            display: 'inline-block'
        }}
        />
    );
};

export default Spinner;