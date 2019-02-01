import axios from "axios";

axios.defaults.baseURL = "https://veizexycob.execute-api.us-east-1.amazonaws.com/develop/endpoints";
axios.defaults.headers.post["Content-Type"] = "application/json";

const getGroups = () => axios.get("/groups")
    .then(result => result);

const getCurrentSession = (groupId) => axios.get(`/sessions?groupId=${groupId}`)
    .then(result => result);

const sendSessionGrades = ({groupId, currentSessionNumber, professorId = null, mentorId = null, studentFeedback}) => axios.put(`/sessions`, {
    groupId,
    currentSessionNumber,
    ...professorId && { professorId },
    ...mentorId && { mentorId },
    studentFeedback
}).then(result => result);

export {getGroups, getCurrentSession, sendSessionGrades};