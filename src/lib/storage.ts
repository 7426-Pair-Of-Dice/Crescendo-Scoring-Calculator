import type { AllianceInfo } from './types';

// Check if localStorage is available
export function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

// Store alliances data in localStorage
export function saveAlliances(alliances: AllianceInfo[]): void {
  if (!isLocalStorageAvailable()) {
    console.error('LocalStorage is not available.');
    return;
  }
  try {
    const serializedData = JSON.stringify(alliances);
    localStorage.setItem('alliances', serializedData);
  } catch (error) {
    console.error('Error saving alliances to localStorage:', error);
  }
}

// Retrieve alliances data from localStorage
export function loadAlliances(): AllianceInfo[] {
  if (!isLocalStorageAvailable()) {
    console.error('LocalStorage is not available.');
    return [];
  }
  try {
    const serializedData = localStorage.getItem('alliances');
    if (serializedData) {
      return JSON.parse(serializedData) as AllianceInfo[];
    }
    return [];
  } catch (error) {
    console.error('Error loading alliances from localStorage:', error);
    return [];
  }
}
