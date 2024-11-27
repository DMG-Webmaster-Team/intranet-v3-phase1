import { useTranslation } from "react-i18next";

const Thanks = () => {
    const { t } = useTranslation();

    return (
        <div style={{ color: "#001A70" }} className={`d-flex justify-content-start ${localStorage.getItem("i18nextLng") === "en" ? "Poppinsbold" : "tajawal"}`}>
            <div></div>
            <center className="">
                {/* <h2 className="fw-bolder">{localStorage.getItem("i18nextLng") === "ar" ? t("thanks_title") : "Code of Conduct"} </h2> */}
                <h2 className="fw-bolder">{t("thanks_title")}</h2>
                <h5 className="fw-bold">{t("thanks_subtitle")}</h5>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 className="fw-bolder">{t("thank_you")}</h3>
                <h4 className={`fw-bolder ${localStorage.getItem("i18nextLng") === "en" && "w-75"}`}>{t("wwgbtu")}</h4>
                <br />
            </center>
        </div>
    )
}

export default Thanks