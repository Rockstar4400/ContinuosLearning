
import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate = useNavigate();

    return (
        <>
            <h2>Contact Page</h2>
            <button
                onClick={() => {
                    navigate(-1)
                }}
            >
                Go back
            </button>
        </>
    );
}

export default Contact;