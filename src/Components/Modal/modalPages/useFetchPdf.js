import { useState, useEffect, useContext } from "react";
import { IntranetContext } from "../../../context";
import Cookies from "js-cookie";

const useFetchPdf = (filterText) => {
    const [pdfToRender, setPdfToRender] = useState(null);
    const [loading, setLoading] = useState(true); // To handle loading state

    const { fetchData } = useContext(IntranetContext);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                setLoading(true);
                const res = await fetchData("documents");
                const userCompany = JSON.parse(Cookies.get("user")).userCompany;
                console.log("dfds", userCompany, res);

                const documents = res?.documents?.filter((doc) =>
                    doc.document_name.includes(filterText)
                );
                const shortenedPdfName = documents?.map((doc) => {
                    return {
                        shortName: doc.document_name.split(" ")[0].toLowerCase(),
                        url: doc.document_url
                    }

                })
                // console.log(shortenedPdfName, "sdsd")

                const pdf = shortenedPdfName.filter((document) =>
                    userCompany.length === 3 ? document.shortName === userCompany?.toLowerCase() : document.shortName === userCompany.split(" ")[0]?.toLowerCase()
                );
                // console.log(pdf[0]?.url.split("/").at(-1))

                if (pdf?.length > 0) {
                    setPdfToRender(pdf[0]);
                }
            } catch (error) {
                console.error("Error fetching documents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, [filterText]); // Ensure fetchData is stable

    return { pdfToRender, loading };
};

export default useFetchPdf;
