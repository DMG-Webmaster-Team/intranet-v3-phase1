import { Button } from "react-bootstrap"
import FileIcon from "../fileIcon"

const DefaultPage = ({ changeContent }) => {
    return (
        <div style={{ color: "#001A70" }} className="pt-5">
            <center className="tajawal pt-5">
                <h2 className="fw-bolder">ميثاق السلوك الأخلاقي</h2>
                <h5 className="fw-bold">الأخلاق في كل قرار</h5>
                <br />
                <h5 className="tajawal_bold">:إخلاء المسؤولية</h5>
                <h5 className="fw-bold px-5">
                    عليك الالتزام بقراءة وتوقيع ميثاق السلوك الأخلاقي حتى تتمكن من الدخول على الانترانت
                </h5>

                <br />
                <h4 className="fw-bolder">اختر اللغة التي ترغب في قراءة ميثاق السلوك بها</h4>
                <br />
                <div className="d-flex justify-content-around align-items-center mt-3 mb-0">
                    <div className="d-flex flex-column align-items-center gap-3">

                        <FileIcon />
                        <Button className="modal-btn" onClick={() => changeContent('english', 'ltr')}>
                            English
                        </Button>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                        <FileIcon />
                        <Button className="modal-btn" onClick={() => changeContent('arabic', 'rtl')}>
                            عربى
                        </Button>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default DefaultPage