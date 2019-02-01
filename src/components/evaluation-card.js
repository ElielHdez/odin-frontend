import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";

class EvaluationCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pronunciationPoints: "90",
            pronunciationFeedback: "Pronunc",
            pronunciationGoal: "",
            comprehensionPoints: "91",
            comprehensionFeedback: "comp",
            comprehensionGoal: "",
            grammarPoints: "78",
            grammarFeedback: "grammar",
            grammarGoal: "",
            vocabularyPoints: "78",
            vocabularyFeedback: "vocab",
            vocabularyGoal: ""
        }
    };

    handleStudentGrades = () => {
        const { studentId, studentName, onGrade } = this.props;
        const staffRole = localStorage.getItem("staffLogged");
        const {
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
        } = this.state;
        const groupId = localStorage.getItem("currentGroupId");
        onGrade(
            studentId,
            studentName,
            staffRole,
            groupId,
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
        )
    };

    pronunciationPointsHandler = (points) => this.setState({ pronunciationPoints: points });

    pronunciationFeedbackHandler = (feedback) => this.setState({ pronunciationFeedback: feedback });

    pronunciationGoalHandler = (goal) => this.setState({ pronunciationGoal: goal });

    comprehensionPointsHandler = (points) => this.setState({ comprehensionPoints: points });

    comprehensionFeedbackHandler = (feedback) => this.setState({ comprehensionFeedback: feedback });

    comprehensionGoalHandler = (goal) => this.setState({ comprehensionGoal: goal });

    grammarPointsHandler = (points) => this.setState({ grammarPoints: points });

    grammarFeedbackHandler = (feedback) => this.setState({ grammarFeedback: feedback });

    grammarGoalHandler = (goal) => this.setState({ grammarGoal: goal });

    vocabularyPointsHandler = (points) => this.setState({ vocabularyPoints: points });

    vocabularyFeedbackHandler = (feedback) => this.setState({ vocabularyFeedback: feedback });

    vocabularyGoalHandler = (goal) => this.setState({ vocabularyGoal: goal });

    categoryAvatar = (category) => {
        return (
            <Avatar aria-label="Recipe">
                {category}
            </Avatar>
        );
    };

    inputPoints = (pointsHandler) => {
        return (
            <TextField
                id="outlined"
                label="Points"
                variant="outlined"
                inputProps={{
                    type: "number",
                    maxLength: 2
                }}
                style={{ flex: 1, margin: 4 }}
                onChange={(points) => pointsHandler(points.target.value)}
            />
        );
    };

    inputFeedback = (feedbackHandler) => {
        return (
            <TextField
                id="outlined"
                label="Feedback"
                variant="outlined"
                style={{ flex: 3, margin: 4 }}
                onChange={(feedback) => feedbackHandler(feedback.target.value)}
            />
        );
    };

    inputGoal = (goalHandler) => {
        return (
            <TextField
                id="outlined"
                label="Goal for next session"
                variant="outlined"
                style={{ margin: 4 }}
                fullWidth
                onChange={(goal) => goalHandler(goal.target.value)}
            />
        );
    };

    renderEvaluationInputs = (category) => {
        const staffLogged = localStorage.getItem("staffLogged");
        if (category === "P") {
            return (
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        key={category}
                    >
                        {this.categoryAvatar(category)}
                        {this.inputPoints(this.pronunciationPointsHandler)}
                        {this.inputFeedback(this.pronunciationFeedbackHandler)}
                    </div>
                    {staffLogged === "Mentor" && this.inputGoal(this.pronunciationGoalHandler)}
                </div>
            )
        } else if (category === "C") {
            return (
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        key={category}
                    >
                        {this.categoryAvatar(category)}
                        {this.inputPoints(this.comprehensionPointsHandler)}
                        {this.inputFeedback(this.comprehensionFeedbackHandler)}
                    </div>
                    {staffLogged === "Mentor" && this.inputGoal(this.comprehensionGoalHandler)}
                </div>
            )
        } else if (category === "G") {
            return (
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        key={category}
                    >
                        {this.categoryAvatar(category)}
                        {this.inputPoints(this.grammarPointsHandler)}
                        {this.inputFeedback(this.grammarFeedbackHandler)}
                    </div>
                    {staffLogged === "Mentor" && this.inputGoal(this.grammarGoalHandler)}

                </div>
            )
        } else if (category === "V") {
            return (
                <div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        key={category}
                    >
                        {this.categoryAvatar(category)}
                        {this.inputPoints(this.vocabularyPointsHandler)}
                        {this.inputFeedback(this.vocabularyFeedbackHandler)}
                    </div>
                    {staffLogged === "Mentor" && this.inputGoal(this.vocabularyGoalHandler)}
                </div>
            )
        }
    };

    render() {
        const { studentName } = this.props;
        const categories = ["P", "C", "G", "V"];
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe">
                            A1
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={studentName}
                    subheader="Intereses"
                />
                <CardContent>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {
                            categories.map(category => {
                                return this.renderEvaluationInputs(category)
                            })
                        }
                    </div>
                </CardContent>
                <CardActions>
                    <Button fullWidth variant={"contained"} onClick={this.handleStudentGrades}>
                        Guardar evaluación
                    </Button>
                </CardActions>
            </Card>
        );
    }
}


EvaluationCard.propTypes = {
    studentId: PropTypes.string.isRequired,
    studentName: PropTypes.string.isRequired,
    onGrade: PropTypes.func.isRequired
};

export default EvaluationCard;