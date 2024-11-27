import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useSubmitCoc from "./useSubmitCoc";

const DiscloseAr = ({ changeContent }) => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        prevSubmitted: "",
        involved: "",
        message: "",
        isResponsible: false
    })

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
        // console.log(formData)
        handleCOCSubmit(formData, "disclose", "donot_agree");
        localStorage.setItem("codeOfCOnductAgreement", true)
    }
    const { loading, response, handleCOCSubmit } = useSubmitCoc()

    useEffect(() => {
        if (response === true) {
            // console.log("inside if condition: TRUE");
            changeContent('discloseThanks', 'rtl');

        } else {
            console.log("Something wrong happened!");
        }
    }, [changeContent, response]);
    return (
        <div style={{ color: "#001A70" }} className="tajawal">
            <form onSubmit={handleSubmit}>
                <h5 className="fw-bolder">{t("disclose_title")}</h5>
                <hr className="m-0 custom-hr" />
                <br />
                <div className="mb-3">
                    <textarea className="form-control" placeholder="أكتب هنا......." id="message" value={formData.message} onChange={handleChange} name="message" rows="6" style={{ background: "#D9D9D9" }}></textarea>
                </div>
                <br />
                <div className="radio-group rtl">
                    <span className="fw-bold">{t("1st")}</span>
                    <label htmlFor="yes"><input type="radio" className="ms-2" name="prevSubmitted"
                        id="yes" value="yes"
                        checked={formData.prevSubmitted === "yes"}
                        onChange={handleChange} /> نعم</label>
                    <label htmlFor="no"><input type="radio" className="ms-2" name="prevSubmitted"
                        id="no" value="no"
                        checked={formData.prevSubmitted === "no"}
                        onChange={handleChange} /> لا</label>
                </div>
                <br />
                <div className="radio-group rtl">
                    <span className="fw-bold">{t("2nd")}</span>
                    <label htmlFor="yes"><input type="radio" name="involved"
                        id="yes" value="yes"
                        checked={formData.involved === "yes"}
                        onChange={handleChange} className="ms-2" /> نعم</label>
                    <label htmlFor="no"><input type="radio" className="ms-2" name="involved"
                        id="no" value="no"
                        checked={formData.involved === "no"}
                        onChange={handleChange} /> لا</label>
                </div>
                <br />

                <div className="form-check d-flex flex-row-reverse justify-content-end">
                    <label className="form-check-label fw-bold" htmlFor="isResponsible">
                        {t("third")}
                    </label>
                    <input type="checkbox" className="ms-2 form-check-input" name="isResponsible" checked={formData.isResponsible}
                        onChange={handleChange} id="isResponsible" />
                </div>
                <br />
                <br />
                <div className="text-start">
                    <button className="modal-btn" disabled={!formData.isResponsible}>إرسال</button>
                </div>

                {loading && <p>Loading...</p>}
                {response && <p>Response: {JSON.stringify(response)}</p>}
            </form>
        </div>
    )
}

export default DiscloseAr