import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBadgeProps } from '../types/student';

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isActive }) => {
  return (
    <View style={[styles.badge, isActive ? styles.active : styles.suspended]}>
      <Text style={[styles.badgeText, isActive ? styles.activeText : styles.suspendedText]}>
        {isActive ? 'ACTIVE' : 'SUSPENDED'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  active: {
    backgroundColor: '#DCFCE7',
  },
  suspended: {
    backgroundColor: '#FEE2E2',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
  },
  activeText: {
    color: '#15803D',
  },
  suspendedText: {
    color: '#B91C1C',
  },
});
