import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import ActiveSessionLayout from "./layout";

class ActiveSessionContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            students: [],
        }
    };

    componentDidMount() {
        this.fetchStudents();
    };

    fetchStudents = () => {
        const currentSession = JSON.parse(localStorage.getItem("currentSession"));
        this.setState({ students: currentSession.students, loading: false})
    };

    /*storeEvaluations = (type, input) => {
        console.log("test: ", type + input)
    };*/

    /*sendEvaluations = () => {

            .then(data => {
                JSON.parse(data);
                console.log("Data ready to be sent: ", data);
            });
    };*/

    render () {
        const { loading, students } = this.state;
        const studentsList = [];
        for (const individual of Object.keys(students)) {
            studentsList.push(students[individual]);
        }
        if (loading) {
            return <CircularProgress />
        }
        return (
            <ActiveSessionLayout
                students={studentsList}
                // evaluateStudent={this.storeEvaluations}
                // onSave={this.sendEvaluations}
            />
        );
    }
}

export default ActiveSessionContainer;