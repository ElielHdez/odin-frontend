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
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

class EvaluationCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            pronunciationPoints: "",
            pronunciationFeedback: "",
            comprehensionPoints: "",
            comprehensionFeedback: "",
            grammarPoints: "",
            grammarFeedback: "",
            vocabularyPoints: "",
            vocabularyFeedback: ""
        }
    };

    pronunciationPointsHandler = (points) => this.setState({ pronunciationPoints: points });

    pronunciationFeedbackHandler = (feedback) => this.setState({ pronunciationFeedback: feedback });

    comprehensionPointsHandler = (points) => this.setState({ comprehensionPoints: points });

    comprehensionFeedbackHandler = (feedback) => this.setState({ comprehensionFeedback: feedback });

    grammarPointsHandler = (points) => this.setState({ grammarPoints: points });

    grammarFeedbackHandler = (feedback) => this.setState({ grammarFeedback: feedback });

    vocabularyPointsHandler = (points) => this.setState({ vocabularyPoints: points });

    vocabularyFeedbackHandler = (feedback) => this.setState({ vocabularyFeedback: feedback });

    pronunciationDrawer = () => {
        const { pronunciationPoints, pronunciationFeedback } = this.state;
        return (
            <div style={{ marginTop: 8 }}>
                <Typography>
                    Pronunciation
                </Typography>
                <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TextField
                        id="outlined"
                        label="Points"
                        defaultValue={pronunciationPoints}
                        variant="outlined"

                    />
                    <TextField
                        id="outlined"
                        label="Feedback"
                        defaultValue={pronunciationFeedback}
                        variant="outlined"

                    />
                </div>
                <Card.Actions>
                    <Button onClick={() => this.drawerVisibilityToggler()} >
                        Ocultar campos
                    </Button>
                </Card.Actions>
            </div>
        );
    };

    comprehensionDrawer = () => {
        const { comprehensionPoints, comprehensionFeedback } = this.state;
        return (
            <div style={{ marginTop: 8 }}>
                <Typography>
                    Comprehension
                </Typography>
                <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TextField
                        id="outlined"
                        label="Points"
                        defaultValue={comprehensionPoints}
                        variant="outlined"

                    />
                    <TextField
                        id="outlined"
                        label="Feedback"
                        defaultValue={comprehensionFeedback}
                        variant="outlined"

                    />
                </div>
                <Card.Actions>
                    <Button onPress={() => this.drawerVisibilityToggler()} >
                        Ocultar campos
                    </Button>
                </Card.Actions>
            </div>
        );
    };

    grammarDrawer = () => {
        const { grammarPoints, grammarFeedback } = this.state;
        return (
            <div style={{ marginTop: 8 }}>
                <Typography>
                    Grammar
                </Typography>
                <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TextField
                        id="outlined"
                        label="Points"
                        defaultValue={grammarPoints}
                        variant="outlined"

                    />
                    <TextField
                        id="outlined"
                        label="Feedback"
                        defaultValue={grammarFeedback}
                        variant="outlined"

                    />
                </div>
                <Card.Actions>
                    <Button onPress={() => this.drawerVisibilityToggler()} >
                        Ocultar campos
                    </Button>
                </Card.Actions>
            </div>
        );
    };

    vocabularyDrawer = () => {
        const { vocabularyPoints, vocabularyFeedback } = this.state;
        return (
            <div style={{ marginTop: 8 }}>
                <Typography>
                    Vocabulary
                </Typography>
                <div style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TextField
                        id="outlined"
                        label="Points"
                        defaultValue={vocabularyPoints}
                        variant="outlined"

                    />
                    <TextField
                        id="outlined"
                        label="Feedback"
                        defaultValue={vocabularyFeedback}
                        variant="outlined"

                    />
                </div>
                <Card.Actions>
                    <Button onPress={() => this.drawerVisibilityToggler()} >
                        Ocultar campos
                    </Button>
                </Card.Actions>
            </div>
        );
    };

    render() {
        const { name } = this.props;
        const { isDrawerVisible, activeTab } = this.state;
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
                    title={name}
                    subheader="Intereses"
                />
                <CardContent>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {
                            categories.map(categoryInitial => {
                                return (
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}
                                        key={categoryInitial}
                                    >
                                        <Avatar aria-label="Recipe">
                                            {categoryInitial}
                                        </Avatar>
                                        <TextField
                                            id="outlined"
                                            label="Points"
                                            defaultValue={""}
                                            variant="outlined"
                                            margin="none"
                                            notched
                                            style={{ flex: 1 }}
                                        />
                                        <TextField
                                            id="outlined"
                                            label="Feedback"
                                            defaultValue={""}
                                            variant="outlined"
                                            style={{ flex: 3 }}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        isDrawerVisible && activeTab && this.renderDrawer()
                    }
                </CardContent>
                <CardActions>
                    <Button fullWidth variant={"contained"}>
                        Guardar evaluación
                    </Button>
                </CardActions>
            </Card>
        );
    }
}


EvaluationCard.propTypes = {
    name: PropTypes.string.isRequired,
};

export default EvaluationCard;