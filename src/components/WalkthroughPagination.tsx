import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '~/themes';

type Props = {
  active: number;
  containerStyle?: any;
};

export default function WalkthroughPagination({ active, containerStyle }: Props) {
  return (
    <View style={[styles.container, containerStyle]}>
      {[0, 1, 2].map((item, index) =>
        index === active ? (
          <View key={item} style={styles.activeDot} />
        ) : (
          <View key={item} style={styles.inactiveDot} />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeDot: {
    width: 16,
    height: 16,
    backgroundColor: Colors.purple,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: Colors.purple_border,
    borderStyle: 'solid',
  },
  inactiveDot: {
    width: 8,
    height: 8,
    backgroundColor: Colors.grey_light,
    borderRadius: 100,
  },
});
