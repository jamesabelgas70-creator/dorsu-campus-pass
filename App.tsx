import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { Header } from './src/components/Header';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { StudentProfile } from './src/types/student';

const primaryStudent: StudentProfile = {
  name: 'Angel James M. Abelgas',
  idNumber: '2024-1262',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3rd Year — Section F',
  avatarUrl: require('./assets/avatar.jpg'),
  campus: 'Main Campus (Guang-guang, Mati City)',
};

/** Peer props demo — same StudentCard, different data */
const peerStudent: StudentProfile = {
  name: 'Maria Clara S. Santos',
  idNumber: '2024-2192',
  program: 'BS in Information Technology (BSIT)',
  yearLevel: '3nd Year — Section F',
  avatarUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
  campus: 'Main Campus (Guang-guang, Mati City)',
};

function CampusPassScreen() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [gateScans, setGateScans] = useState<number>(0);
  const [showPeer, setShowPeer] = useState<boolean>(false);

  const handleScan = () => setGateScans((prev) => prev + 1);
  const handleReset = () => setGateScans(0);
  const togglePassStatus = () => setIsActive((prev) => !prev);
  const togglePeer = () => setShowPeer((prev) => !prev);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <StudentCard student={primaryStudent} isActive={isActive} />

        <ScanCounter
          count={gateScans}
          onScan={handleScan}
          onReset={handleReset}
        />

        <Pressable
          style={[styles.toggleBtn, !isActive && styles.toggleBtnActive]}
          onPress={togglePassStatus}
        >
          <Text style={[styles.toggleText, !isActive && styles.toggleTextActive]}>
            {isActive
              ? '⚠️ Simulate Pass Suspension'
              : '✓ Reactivate Pass Access'}
          </Text>
        </Pressable>

        <Pressable style={styles.peerBtn} onPress={togglePeer}>
          <Text style={styles.peerBtnText}>
            {showPeer ? 'Hide Peer Demo' : 'Show Peer Component Demo'}
          </Text>
        </Pressable>

        {showPeer && (
          <View style={styles.peerSection}>
            <Text style={styles.peerLabel}>PEER PROPS DEMO:</Text>
            <StudentCard student={peerStudent} isActive={true} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <CampusPassScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  container: {
    padding: 16,
    gap: 16,
    paddingBottom: 40,
  },
  toggleBtn: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleBtnActive: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  toggleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#B45309',
  },
  toggleTextActive: {
    color: '#15803D',
  },
  peerBtn: {
    backgroundColor: '#E0F2FE',
    borderWidth: 1,
    borderColor: '#00758F',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  peerBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#00758F',
  },
  peerSection: {
    gap: 8,
    borderTopWidth: 2,
    borderTopColor: '#00758F',
    paddingTop: 12,
  },
  peerLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#00758F',
    letterSpacing: 0.5,
  },
});
