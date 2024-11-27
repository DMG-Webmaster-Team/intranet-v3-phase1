import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Spinner from 'react-bootstrap/Spinner';
import useSubmitCoc from "./useSubmitCoc";

const Disclose = ({ changeContent }) => {

    const [formData, setFormData] = useState({
        prevSubmitted: "",
        involved: "",
        message: "",
        isResponsible: false
    })
    const { t } = useTranslation();

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        handleCOCSubmit(formData, "disclose", "donot_agree");
        localStorage.setItem("codeOfCOnductAgreement", true)

    }
    const { loading, response, handleCOCSubmit } = useSubmitCoc()

    useEffect(() => {
        if (response === true) {
            changeContent('discloseThanks', 'ltr');

        } else {
            console.log("Something wrong happened!");
        }
    }, [changeContent, response]);
    return (
        <div style={{ color: "#001A70" }} className="Poppinsbold">
            <form onSubmit={handleSubmit}>
                <h5 className="fw-bold" style={{ fontWeight: "900" }}>{t("disclose_title")}</h5>
                <hr className="m-0 custom-hr" />
                <br />
                <div className="mb-3">
                    <textarea className="form-control" required placeholder="Write here......." id="message" value={formData.message}
                        onChange={handleChange} name="message" rows="6" style={{ background: "#D9D9D9" }}></textarea>
                </div>
                <div className="radio-group ltr">
                    <span className="fw-bold fs-6">{t("1st")}</span>
                    <label htmlFor="yes">
                        <input type="radio" name="prevSubmitted"
                            id="yes" value="yes"
                            required
                            checked={formData.prevSubmitted === "yes"}
                            onChange={handleChange}
                        /> Yes</label>
                    <label htmlFor="no"><input type="radio" name="prevSubmitted"
                        id="no" value="no"
                        checked={formData.prevSubmitted === "no"}
                        onChange={handleChange} /> No</label>
                </div>
                <br />
                <div className="radio-group ltr">
                    <span className="fw-bold">{t("2nd")}</span>
                    <label htmlFor="yes"><input type="radio" name="involved"
                        id="yes" value="yes"
                        required
                        checked={formData.involved === "yes"}
                        onChange={handleChange} /> Yes</label>
                    <label htmlFor="no"><input type="radio" name="involved"
                        id="no" value="no"
                        checked={formData.involved === "no"}
                        onChange={handleChange} /> No</label>
                </div>
                <br />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="isResponsible" checked={formData.isResponsible}
                        onChange={handleChange} id="isResponsible" />
                    <label className="form-check-label fw-bold" htmlFor="isResponsible">
                        {t("third")}
                    </label>
                </div>
                <br />
                <br />
                <div className="text-end">
                    <button className="modal-btn" disabled={!formData.isResponsible}>
                        {loading ? <> "Submitting..."<span><Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner></span> </> : "Submit"}
                    </button>
                </div>
                {loading && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default Disclose