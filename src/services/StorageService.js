export const StorageService = {
    saveToStorage,
    loadFromStorage
}

function saveToStorage(key, value) {
    const valueJson = JSON.stringify(value);
    localStorage.setItem(key, valueJson);
}

function loadFromStorage(key) {
    return localStorage.getItem(key);
}