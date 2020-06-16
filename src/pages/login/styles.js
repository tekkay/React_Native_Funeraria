import { StyleSheet, Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 40;

const Styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#000000',
  },
  inputWrapper: {
    flex: 0,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  inlineImgEy: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 360,
    top: 9,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: MARGIN,
    width: DEVICE_WIDTH - 40,
    borderRadius: 20,
    zIndex: 100,
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#000000',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  textCon: {
    color: 'black',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
  containerSignup: {
    flex: 1,
    top: 0,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Styles;
