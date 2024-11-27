import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useSubmitCoc = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const myCookie = JSON.parse(Cookies.get("user"));
    const { userEmail, userName, userId, userCompany, userDepartment } = myCookie;

    const handleCOCSubmit = async (formData, type, isAgreed) => {
        let postData = {
            data_type: "setCocFeeback",
            credentials: {
                code: userId,
                name: userName,
                email: userEmail,
                company: userCompany,
                department: userDepartment,
                submit_type: type,
                comments: formData?.message || "",
                prev_report: formData?.prevSubmitted || "",
                early_violation: formData?.involved || "",
                con_responsability: isAgreed,
            },
        };

        try {
            setLoading(true);
            const response = await axios.post(
                "https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php",
                postData,
                { headers: { "Content-Type": "application/json" } }
            );
            setResponse(response?.data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, handleCOCSubmit };
};

export default useSubmitCoc;
