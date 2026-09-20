import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Module 5 — Institutional header
 * Flexbox: column stack, center-aligned cross axis
 */
export const Header: React.FC = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.university}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
      <Text style={styles.faculty}>
        FACULTY OF COMPUTING, ENGINEERING, AND TECHNOLOGY
      </Text>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>OFFICIAL STUDENT DIGITAL PASS</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.meta}>AY 2026–2027</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Card Body preset: column + stretch (RN default flexDirection)
  banner: {
    backgroundColor: '#00758F',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 14,
    alignItems: 'center',
    gap: 6,
  },
  university: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.4,
    textAlign: 'center',
  },
  faculty: {
    color: '#E0F2FE',
    fontSize: 9,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  // Card Header preset: row + space-between-ish (centered cluster)
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  meta: {
    color: '#FEF3C7',
    fontSize: 9,
    fontWeight: '700',
  },
  metaDot: {
    color: '#FEF3C7',
    fontSize: 9,
  },
});
