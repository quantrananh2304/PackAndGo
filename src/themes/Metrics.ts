import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const { width, height } = Dimensions.get('window');
const screenRatio = height / width;
const hasNotch = DeviceInfo.hasNotch();
const isIOS = Platform.OS === 'ios';

const Metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  isIOS,
  screenRatio,
  hasNotch,
};

export default Metrics;
