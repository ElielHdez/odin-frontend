import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import ActiveSessionLayout from "./layout";
import {sendSessionGrades} from "../../services/axios";

class ActiveSessionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            students: [],
            studentFeedback: {}
        }
    };

    componentDidMount() {
        this.fetchStudents();
    };

    fetchStudents = () => {
        const currentSession = JSON.parse(localStorage.getItem("currentSession"));
        this.setState({ students: currentSession.students, loading: false})
    };

    bundleStudentsPerformance = (
        studentId,
        studentName,
        staffRole,
        pronunciationPoints,
        pronunciationFeedback,
        pronunciationGoal,
        comprehensionPoints,
        comprehensionFeedback,
        comprehensionGoal,
        grammarPoints,
        grammarFeedback,
        grammarGoal,
        vocabularyPoints,
        vocabularyFeedback,
        vocabularyGoal
    ) => {
        const { studentFeedback } = this.state;
        const studentBundle = {
            name: studentName,
            feedback: {
                pronunciation: {
                    [staffRole]: {
                        points: pronunciationPoints,
                        comments: pronunciationFeedback,
                        ...staffRole === "Mentor" && { nextGoal: pronunciationGoal }
                    }
                },
                comprehension: {
                    [staffRole]: {
                        points: comprehensionPoints,
                        comments: comprehensionFeedback,
                        ...staffRole === "Mentor" && { nextGoal: comprehensionGoal }
                    }
                },
                grammar: {
                    [staffRole]: {
                        points: grammarPoints,
                        comments: grammarFeedback,
                        ...staffRole === "Mentor" && { nextGoal: grammarGoal }
                    }
                },
                vocabulary: {
                    [staffRole]: {
                        points: vocabularyPoints,
                        comments: vocabularyFeedback,
                        ...staffRole === "Mentor" && { nextGoal: vocabularyGoal }
                    }
                }
            }
        };
        if (!studentFeedback[studentId]) {
            studentFeedback[studentId] = studentBundle;
            this.setState({ studentFeedback })
        }
    };

    sendEvaluations = () => {
        const { history } = this.props;
        const { studentFeedback } = this.state;
        const groupId = localStorage.getItem("currentGroupId");
        const currentSessionNumber = localStorage.getItem("currentSessionNumber");
        const professorId = (localStorage.getItem("staffLogged") === "Professor" ? "Professor" : null);
        const mentorId = (localStorage.getItem("staffLogged") === "Mentor" ? "Mentor" : null);

        sendSessionGrades({
            groupId,
            currentSessionNumber,
            ...professorId && { professorId },
            ...mentorId && { mentorId },
            studentFeedback
        })
            .then(() => history.push(`/`))
            .catch((error) => console.log(error));
    };

    render () {
        const { loading, students } = this.state;
        const studentsList = [];
        for (const individual of Object.keys(students)) {
            studentsList.push({...students[individual], ...{id: individual }});
        }
        if (loading) {
            return <CircularProgress />
        }
        return (
            <ActiveSessionLayout
                students={studentsList}
                evaluateStudent={this.bundleStudentsPerformance}
                onEnd={this.sendEvaluations}
            />
        );
    }
}

export default ActiveSessionContainer;