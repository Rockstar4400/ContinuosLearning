import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome Home</h2>
            <button
                onClick={() => 
                    navigate("/about", { from: "Home" })}
            >
                About
            </button>
            <button
                onClick={() => 
                    navigate("/contact", { from: "Home" })}
            >
                Contact
            </button>
        </div>
    );
}

export default Home;