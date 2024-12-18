import React, { useContext } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import { Text } from "../../containers/Language";
import { IntranetContext } from "../../context";
import "../Forms/forms.css";
import useFetchPdf from "../../Components/Modal/modalPages/useFetchPdf";

const CodeOfConduct = () => {

    const { colorTheme } = useContext(IntranetContext);
    const { pdfToRender: engPdfToRender } = useFetchPdf("conduct English");
    const { pdfToRender: arabPdfToRender } = useFetchPdf("Arb");

    const documentArr = [
        { title: "Arabic Version", href: arabPdfToRender?.url },
        { title: "English Version", href: engPdfToRender?.url },

    ];

    return (
        <>
            <PagesHeader data={<Text tid="Code Of Conduct" />} />
            <div className="container mt-md-5 mt-3">
                <div className="row d-flex justify-content-center">
                    {documentArr.map((item) => (
                        <div key={item.title} className="col-7">
                            <div className="row gx-2 text-center mb-3">
                                <div className="col-8 title-background mx-4  d-flex justify-content-center align-items-center">
                                    <h4 className="">{item.title}</h4>
                                </div>
                                <div className="col-3">
                                    <div className="row">
                                        <div className={`view ${colorTheme}  col-12 p-1 py-3`}>
                                            <a href={item.href} rel="noreferrer" target="_blank">
                                                View{" "}
                                                <span>
                                                    <i className="ms-2  bi bi-eye-fill"></i>
                                                </span>
                                            </a>
                                        </div>
                                        {/* <div className={`view mt-1 ${colorTheme} col-12 p-1 py-2`}>
                                            <a href={item.href} download>
                                                Download{" "}
                                                <span>
                                                    <i className="ms-2 bi bi-download"></i>
                                                </span>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CodeOfConduct