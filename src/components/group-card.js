import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

const GroupCard = ({title, content, onAccess}) => (
    <Card style={{ margin: 8 }}>
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
            title={title}
            subheader="This is a test"
        />
        <CardContent>
            <Typography component="p">
                {content}
            </Typography>
        </CardContent>
        <CardActions>
            <Button fullWidth variant={"contained"} color={"primary"} onClick={onAccess}>
                Entrar a clase
            </Button>
        </CardActions>
    </Card>
);

GroupCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onAccess: PropTypes.func.isRequired
};

export default GroupCard;