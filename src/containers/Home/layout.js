import React from "react";
import PropTypes from "prop-types";
import GroupCard from "../../components/group-card";
import Grid from "@material-ui/core/Grid";

const HomeLayout = (props) => (
    <Grid container spacing={16} alignItems="flex-start" justify="flex-start">
        {
            props.groups.map(group => {
                return (
                    <Grid item xs={12} sm={6} md={6} lg={4} key={group.groupId}>
                        <GroupCard
                            title={`Grupo ${group.groupName} | Sesión ${group.currentSessionNumber}`}
                            content={`Lugares disponibles: ${group.availableSpots} de ${group.capacity}`}
                            onAccess={() => props.onEnterGroup(group.groupId)}
                        />
                    </Grid>
                );
            })
        }
    </Grid>
);

HomeLayout.propTypes = {
    groups: PropTypes.array.isRequired,
    onEnterGroup: PropTypes.func.isRequired,
};

export default HomeLayout;