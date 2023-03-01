import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderWidth:2,
        width:375,
        height:100,
        flexDirection:"row",
        alignItems:"center",
        marginBottom:5,
        marginTop:15,
    },
    txt:{
        borderWidth:1,
        width:"50%",
        height:"80%",
        marginStart:"2%",
        fontSize:15,
        color:"black",
    },
    editBtn:{
        marginStart:"2%",
        width:"20%",
        height:"50%",
        justifyContent:"center",
        alignItems:"center",
        // borderWidth:2,
    },
    editTxt:{
        fontSize:20,
        color:"black",
    },
    deleteBtn:{
        width:"12%",
        height:"50%",
        // borderWidth:2,
        justifyContent:"center",
        alignItems:"center",
    },
    deleteIcon:{
        width:"40%",
        height:"40%",
    },
    deleteAllBtn:{
        borderWidth:2,
        width:"12%",
        height:"50%",
    },
    deleteAllIcon:{
        width:"100%",
        height:"100%"
    },
})
export default style