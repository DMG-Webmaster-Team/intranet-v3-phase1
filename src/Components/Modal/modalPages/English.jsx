import { useState } from "react";
import useFetchPdf from "./useFetchPdf";
import useSubmitCoc from "./useSubmitCoc";

const English = ({ changeContent, changeLanguage }) => {

    const [isDiscloseChecked, setIsDiscloseChecked] = useState(false);
    const [isTNCChecked, setIsTNCChecked] = useState(false);

    const { response, handleCOCSubmit } = useSubmitCoc()


    const handleDiscloseCheckboxChange = (e) => {
        setIsDiscloseChecked(e.target.checked);
    };
    const handleTermsNConditionsCheckboxChange = (e) => {
        setIsTNCChecked(e.target.checked);
    };
    const { pdfToRender, loading } = useFetchPdf("conduct English");
    if (loading) {
        return (
            <div className="placeholder-glow p-3">
                <p className="placeholder col-12 py-5 m-0"></p>
                <p className="placeholder col-12 py-5 m-0"></p>
                <p className="placeholder col-12 py-5 m-0"></p>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCOCSubmit(undefined, "agree", "agree")
        if (response) {
            localStorage.setItem("codeOfCOnductAgreement", true)
        }
        if (isTNCChecked && response) changeContent('thanks', 'ltr')
        changeLanguage("en")
    }
    return (
        <div>
            <div className="pdf-container">
                <object data={pdfToRender && pdfToRender?.url} type="application/pdf" style={{ height: "65vh" }} width="100%" height="100%">
                </object>
            </div>
            <form onSubmit={handleSubmit} className="px-3 mb-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" onChange={handleTermsNConditionsCheckboxChange}
                        checked={isTNCChecked} id="terms" />
                    <label className="form-check-label" htmlFor="terms">
                        Yes, I have read and accept the terms & conditions of the Code Of Conduct
                        &nbsp; I have nothing to disclose.
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" onChange={handleDiscloseCheckboxChange}
                        checked={isDiscloseChecked} id="disclose" />
                    <label className="form-check-label" htmlFor="disclose">
                        I have something I want to disclose.
                    </label>
                </div>
                <div className="text-end">
                    <button type="submit" className="modal-btn me-4" disabled={!isTNCChecked || isDiscloseChecked}
                        onClick={() => {
                            handleCOCSubmit(undefined, "agree", "agree")
                            localStorage.setItem("codeOfCOnductAgreement", true)
                            if (isTNCChecked) changeContent('submitThanks', 'ltr')
                            changeLanguage("en")
                        }}
                    >Submit</button>
                    <button type="button" className="modal-btn" disabled={!isDiscloseChecked || !isTNCChecked} onClick={() => {
                        if (isDiscloseChecked) changeContent('disclose', 'ltr')
                        changeLanguage("en")
                    }}>Disclose</button>
                </div>
            </form>
        </div>
    )
}

export default English
