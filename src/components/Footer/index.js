import { useState } from "react";
import { Button } from "react-bootstrap";
import ResumeModal from "../ResumeModal";

const Footer = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => setShow(false);

    return (
        <div id="footer">
            <h4 className="footer-text">
                 <span>&#x2192;</span>
            </h4>
            <div className="footer-links-wrapper">
                <Button className="resume-footer" variant="link" onClick={() => { handleShow() }} >
                    <img //resume
                        src={require(`../../assets/links/colored-resume.png`).default}
                        alt=''
                        className="footer-link"
                    />
                </Button>
                {show ? <ResumeModal onClose={handleClose} /> : null}
                <a href="" target="_blank">
                    <img //github
                        src={require(`../../assets/links/github2.png`).default}
                        alt='github symbol'
                        className="footer-link"
                    />
                </a>
                <a href="" target="_blank">
                    <img //linkedin
                        src={require(`../../assets/links/linkedin.png`).default}
                        alt='linked in symbol'
                        className="footer-link"
                    />
                </a>
                <a href="" target="_blank">
                    <img //indeed
                        src={require(`../../assets/links/instagram.png`).default}
                        alt='instagram symbol'
                        className="footer-link"
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer;