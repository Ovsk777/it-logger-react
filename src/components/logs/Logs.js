import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Logitem from './LogItem';
import PreLoader from '../layout/Preloader';
import PropTypes from 'prop-types'
import {  getLogs } from '../../actions/logActions'

const Logs = ({ log: { logs, loading}, getLogs }) => {

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])                      //empty array as we want it to run once and no re-rendering required


    if(loading || logs === null){
        return <PreLoader />
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">
                    System Logs
                </h4>
            </li>
            {!loading && logs.length=== 0 ? (<p>No logs to show..</p>) : 
            (logs.map(log => <Logitem log={log} key={log.id}/>))}
        </ul>
    )
};

Logs.protoTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    log: state.log
})
export default connect(mapStateToProps, { getLogs })(Logs);
