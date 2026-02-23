import { Link } from "react-router-dom"

function Home() {

    return(
        <>
            <h1> Home Page </h1>

            <Link to="/Page1"> Go to Page 1 </Link>
        </>
    )
}

export default Home