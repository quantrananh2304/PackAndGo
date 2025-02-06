import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {
  interestBeach,
  interestMountain,
  interestNature,
  interestUrban,
} from '~/assets/images';
import {
  AppText,
  WalkthroughPagination,
  WalkthroughButton,
} from '~/components';
import { Colors, Fonts } from '~/themes';
import LinearGradient from 'react-native-linear-gradient';
import { checkIcon } from '~/assets/icons';

const pickers = [
  {
    id: 0,
    title: 'Beach',
    source: interestBeach,
  },
  {
    id: 1,
    title: 'Mountain',
    source: interestMountain,
  },
  {
    id: 2,
    title: 'Nature',
    source: interestNature,
  },
  {
    id: 3,
    title: 'Urban',
    source: interestUrban,
  },
];

const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth - 48) / 2;

export default function Interest() {
  const [selectedItem, setSelectedItem] = React.useState<number[]>([]);

  const onSelectItem = (id: number) => {
    setSelectedItem(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }

      return [...prev, id];
    });
  };

  const onNext = () => {
    // Handle next action
  };

  const onSkip = () => {
    // Handle skip action
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AppText style={styles.title}>
          Hi Quan, what do you love most about traveling?
        </AppText>

        <AppText style={styles.subText}>Select 3 or more interests</AppText>

        <View style={styles.interestPickerView}>
          {pickers.map(picker => (
            <TouchableOpacity
              key={picker.id}
              style={styles.interestItem}
              onPress={() => onSelectItem(picker.id)}>
              <Image source={picker.source} style={styles.interestImg} />

              <AppText style={styles.interestTitle}>{picker.title}</AppText>

              {selectedItem.includes(picker.id) ? (
                <LinearGradient
                  colors={[Colors.gradientStart, Colors.gradientEnd]}
                  style={[styles.pickerCircle, styles.noBorder]}>
                  <Image source={checkIcon} style={styles.checkIcon} />
                </LinearGradient>
              ) : (
                <View style={styles.pickerCircle} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <WalkthroughPagination
          active={0}
          containerStyle={styles.paginationContainer}
        />
      </View>

      <View style={styles.buttonContainer}>
        <WalkthroughButton
          disabled={!selectedItem.length}
          buttonOnPress={onNext}
          onSkipPress={onSkip}
          buttonText="Next"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: Fonts.fontFamily,
  },
  subText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 16,
    color: Colors.grey_medium,
    fontFamily: Fonts.fontFamily,
  },
  interestPickerView: {
    marginTop: 24,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  interestItem: {
    height: itemWidth,
    width: itemWidth,
    borderRadius: 12,
    position: 'relative',
    marginBottom: 16,
  },
  interestTitle: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    fontSize: 15,
    fontWeight: '600',
    color: Colors.white,
    fontFamily: Fonts.fontFamily,
  },
  pickerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 12,
    right: 12,
    borderWidth: 1.5,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBorder: {
    borderWidth: 0,
  },
  checkIcon: {
    width: 11,
    height: 7,
    tintColor: Colors.white,
  },
  interestImg: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  paginationContainer: {
    width: '100%',
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
