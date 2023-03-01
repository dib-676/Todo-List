import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // borderWidth: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerScreen: {
    // borderWidth: 2,
    borderBottomWidth:0.5,
    width: '100%',
    height: '15%',
    justifyContent: 'center',
  },
  mainScreen: {
    // borderWidth: 2,
    backgroundColor:'rgba(0,0,0,0.5)',
    width: '100%',
    height: '65%',
    justifyContent:"center",
    alignItems:"center",
  },
  footerScreen: {
    // borderWidth: 2,
    borderTopWidth:0.5,
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAllBtn: {
    backgroundColor: 'red',
    width: '35%',
    height: '35%',
    marginStart: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAllBtnTxt: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    width: '60%',
    height: '40%',
    borderWidth: 1,
    color:"black",
    fontSize:15,
},
  addBtn: {
    marginStart: '10%',
    borderRadius:35,
    width: 70,
    height: 70,
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center",
  },
});
export default style;
