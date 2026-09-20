import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, isActive }) => {
  const avatarSource =
    typeof student.avatarUrl === 'string'
      ? { uri: student.avatarUrl }
      : student.avatarUrl;

  return (
    <View style={styles.card}>
      {/* Flex preset: Card Header — row + align center + gap */}
      <View style={styles.topRow}>
        <Image source={avatarSource} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.idNumber}>{student.idNumber}</Text>
          <Text style={styles.program}>{student.program}</Text>
          <Text style={styles.yearLevel}>{student.yearLevel}</Text>
        </View>
      </View>

      {/* Flex preset: Card Body — column + stretch + gap */}
      <View style={styles.body}>
        <View style={styles.statusRow}>
          <StatusBadge isActive={isActive} />
          <Text style={styles.passLabel}>Digital Campus Pass</Text>
        </View>
        <Text style={styles.campus}>Campus: {student.campus}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Column + stretch (default RN axis)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    gap: 14,
  },
  // row + center + gap
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  details: {
    flex: 1,
    gap: 2,
  },
  name: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0F172A',
  },
  idNumber: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#00758F',
  },
  program: {
    fontSize: 12,
    color: '#475569',
  },
  yearLevel: {
    fontSize: 11,
    color: '#64748B',
  },
  body: {
    gap: 8,
  },
  // space-between on status strip
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  passLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#94A3B8',
  },
  campus: {
    fontSize: 11,
    color: '#64748B',
  },
});
