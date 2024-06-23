import Swal from "sweetalert2";
import axios from "axios"

// const url = "https://interview-zu4p.onrender.com"
const url = "https://intake-be10.onrender.com";

export const getQuestions = async () => {
    try {
        return await axios.get(`${url}/api/test/viewTested`)
    } catch (error) {
        console.log(error)
    }
}

export const getTestInterface = async (data: any) => {
    try {
        return await axios.post(`${url}/api/login`, data)
    } catch (error) {
        console.log(error)
    }
}

export const CheckUserRegister = async (setUser: any, setLoading: any, data: any) => {

    setLoading(true);

    await axios
        .post(`${url}/api/login`, data)
        .then((res) => {
            setUser(res.data?.data)
            setLoading(false);

        })
        .catch((res) => {
            setLoading(false);
            Swal.fire({
                title: res?.response?.data?.message,
                icon: "success",
            })

        });
};
// formData

export const registerUser = async (setLoading: any, data: any) => {
    await axios.post(`${url}/api/register`, data)
        .then((res) => {
            setLoading(false);
        })
        .catch((res) => {
            setLoading(false);
            Swal.fire({
                title: res?.response?.data?.message,
                icon: "error",
            })
        })
}

export const viewCandidate = async () => {
    try {
        return await axios.get(`${url}/api/`)
    } catch (error) {
        console.log(error)
    }
}

// leadership - score

export const leadershipScore = async (id: string, data: any) => {
    try {
        return await axios.patch(`${url}/api/leadership-score/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}

// Psychological-score

export const psychologicalScore = async (id: string, data: any) => {
    try {
        return await axios.patch(`${url}/api/psychological-score/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}

// Logical-score
export const logicalScore = async (id: string, data: any) => {
    try {
        return await axios.patch(`${url}/api/logical-score/${id}`, data)
    } catch (error) {
        console.log(error)
    }
}



export const justRun = async () => {
    const getData = await axios.get(`${url}`)
    return getData
}


