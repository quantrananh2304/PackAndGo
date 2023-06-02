import React from 'react';
import { View } from 'react-native';
import { Colors } from '~/themes';

type Props = {
  active: number;
};

export default function WalkthroughPagination({ active }: Props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      {[0, 1, 2].map((item, index) =>
        index === active ? (
          <View
            key={item}
            style={{
              width: 16,
              height: 16,
              backgroundColor: Colors.purple,
              borderRadius: 100,
              borderWidth: 4,
              borderColor: 'rgba(204, 175, 242, 1)',
              borderStyle: 'solid',
            }}
          />
        ) : (
          <View
            key={item}
            style={{
              width: 8,
              height: 8,
              backgroundColor: Colors.grey_light,
              borderRadius: 100,
            }}
          />
        ),
      )}
    </View>
  );
}
