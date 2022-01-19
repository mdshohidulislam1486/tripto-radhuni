const { makeStyles } = require("@mui/styles");

const useStyles = makeStyles({
    navbar:{
        backgroundColor:'#002',
        '& a':{
            color:'#ffffff',
            marginLeft:10,
        },
    },

    main:{
        minHeight:'88vh'
    },

    footer:{
        textAlign:"center"
    }
})

export default useStyles;