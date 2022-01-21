const { makeStyles } = require("@mui/styles");

const useStyles = makeStyles({
    navbar:{
        backgroundColor:'#002',
        '& a':{
            color:'#ffffff',
            marginLeft:10,
        },
    },
    brand:{
        fontWeight:'bold',
        fontSize:'1.5rem',
        textDecoration:'none'

    },
    grow:{
        flexGrow:1,
        textAlign:'right',

    },

    main:{
        minHeight:'88vh'
    },

    footer:{
        marginTop:'3rem',
        textAlign:"center"
    },
    section:{
        margin:'2rem 0'
    }
})

export default useStyles;