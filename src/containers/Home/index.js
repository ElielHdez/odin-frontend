import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import {getCurrentSession, getGroups} from "../../services/axios";
import HomeLayout from "./layout";

class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            groups: []
        }
    };

    componentDidMount() {
        this.fetchGroups()
    };

    fetchGroups = () => {
        getGroups()
            .then(response => {
                const { items } = response.data.groups;
                this.setState({ groups: items, loading: false});
            })
            .catch(error => console.log(error));
    };

    openSession = (groupId) => {
        getCurrentSession(groupId)
            .then(response => {
                localStorage.setItem("currentSession", JSON.stringify(response.data.currentSession.attributes));
                // return <Redirect to='/session' />
                this.props.history.push(`/session`)
            })
            .catch(error => console.log(error))
    };

    render () {
        const { loading, groups } = this.state;
        if (loading) {
            return <CircularProgress />
        }
        return (
            <HomeLayout groups={groups} onEnterGroup={this.openSession}/>
        )
    }
}


export default HomeContainer;