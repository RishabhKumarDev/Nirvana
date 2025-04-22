import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return ( 
        <>
        <h1> Page Not Found </h1>
        <h4> back to home  <Link to={"/"}> Home </Link> </h4>
        </>

     );
}
 
export default NotFoundPage;