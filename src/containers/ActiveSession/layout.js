import React from "react";
import PropTypes from "prop-types";
import EvaluationCard from "../../components/evaluation-card";
import Grid from "@material-ui/core/Grid";

const ActiveSessionLayout = (props) => (
    <Grid container spacing={16} alignItems="flex-start" justify="flex-start">
        {
            props.students.map(student => {
                return (
                    <Grid item xs={12} md={6} key={student.name}>
                        <EvaluationCard
                            name={student.name}
                            key={student.groupId}
                        />
                    </Grid>
                );
            })
        }
    </Grid>
);

ActiveSessionLayout.propTypes = {
    students: PropTypes.array.isRequired,
};

export default ActiveSessionLayout;
