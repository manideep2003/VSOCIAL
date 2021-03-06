import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() =>({
    appBar:{
        borderRadius:15,
        margin:'30px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignitems:'center',
    },
    heading:{
        color:'rgba(20, 0, 119, 0.93)',
    },
    image:{
        marginLeft:'15px',
    }
}));