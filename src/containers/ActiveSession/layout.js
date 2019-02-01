import React from "react";
import PropTypes from "prop-types";
import EvaluationCard from "../../components/evaluation-card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const ActiveSessionLayout = (props) => (
    <Grid container spacing={16} alignItems="center" justify="center">
        {
            props.students.map(student => {
                return (
                    <Grid item xs={12} md={6} key={student.id}>
                        <EvaluationCard
                            studentId={student.id}
                            studentName={student.name}
                            key={student.groupId}
                            onGrade={props.evaluateStudent}
                        />
                    </Grid>
                );
            })
        }
        <Button variant={"contained"} color={"primary"} style={{ marginTop: 64, marginBottom: 64 }} onClick={props.onEnd} >
            ENVIAR EVALUACIONES Y FINALIZAR SESIÓN
        </Button>
    </Grid>
);

ActiveSessionLayout.propTypes = {
    students: PropTypes.array.isRequired,
    evaluateStudent: PropTypes.func.isRequired,
    onEnd: PropTypes.func.isRequired
};

export default ActiveSessionLayout;
