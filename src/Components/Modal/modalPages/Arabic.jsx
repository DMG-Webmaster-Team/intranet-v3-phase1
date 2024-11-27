import { useEffect, useState } from "react";
import useFetchPdf from "./useFetchPdf";
import useSubmitCoc from "./useSubmitCoc";

const Arabic = ({ changeContent, changeLanguage }) => {
    const [isDiscloseChecked, setIsDiscloseChecked] = useState(false);
    const [isTNCChecked, setIsTNCChecked] = useState(false);

    const handleDiscloseCheckboxChange = (e) => {
        setIsDiscloseChecked(e.target.checked);
    };
    const handleTermsNConditionsCheckboxChange = (e) => {
        setIsTNCChecked(e.target.checked);
    };

    const { pdfToRender, loading } = useFetchPdf("Arb");
    const { response, handleCOCSubmit } = useSubmitCoc()


    useEffect(() => {
        if (response === true) {
            changeContent('thanks', 'rtl');
        } else {
            console.log("Something wrong happened!");
        }
    }, [response]);


    if (loading) {
        return <div>Loading PDF...</div>;
    }

    function handleSubmit(event) {
        event.preventDefault()
        handleCOCSubmit(undefined, "agree", "agree");
        if (response) {
            localStorage.setItem("codeOfCOnductAgreement", true)
        }
    }


    return (
        <div className="tajawal">
            <div className="pdf-container">
                <object data={pdfToRender && pdfToRender?.url} type="application/pdf" style={{ height: "65vh" }} width="100%" height="100%">
                </object>
            </div>
            <form action="" className=" px-3 mb-2" onSubmit={handleSubmit}>
                <div className="form-check d-flex flex-row-reverse justify-content-end">
                    <label className="form-check-label" htmlFor="terms">
                        نعم، لقد قرأت ووافقت على الشروط والأحكام الخاصة بميثاق السلوك الأخلاقي ولا يوجد شيء أود الافصاح عنه.
                    </label>
                    <input className="ms-2 form-check-input" type="checkbox" value="" onChange={handleTermsNConditionsCheckboxChange}
                        checked={isTNCChecked} id="terms" />
                </div>
                <div className="form-check d-flex flex-row-reverse justify-content-end">
                    <label className="form-check-label" htmlFor="disclose">
                        لدي ما أود الافصاح عنه.
                    </label>
                    <input className="ms-2 form-check-input" onChange={handleDiscloseCheckboxChange}
                        checked={isDiscloseChecked} type="checkbox" value="" id="disclose" />
                </div>
                <div className="text-start">
                    <button type="submit" className="modal-btn ms-4" disabled={!isTNCChecked || isDiscloseChecked} onClick={() => {
                        handleCOCSubmit(undefined, "agree", "agree")
                        localStorage.setItem("codeOfCOnductAgreement", true)
                        if (isTNCChecked) changeContent('submitThanks', 'rtl')
                        changeLanguage("ar")
                    }}>إرسال</button>
                    <button type="button" className="modal-btn" disabled={!isDiscloseChecked || !isTNCChecked} onClick={() => {
                        if (isDiscloseChecked) changeContent('disclose_ar', 'rtl')
                        changeLanguage("ar")
                    }}>إفصاح</button>
                </div>
            </form>
        </div>
    )
}

export default Arabic