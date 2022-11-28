// File src/services/localStorage.js

// Function to get a property from local storage
const get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
        return defaultValue;
    } else {
        return JSON.parse(localStorageData);
    }
};

//Function to save a property and its value in local storage 
const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
};

//Function to erase a property from local storage
const remove = (key) => {
    localStorage.removeItem(key);
};

//Fucntion to clean all local storage 
const clear = () => {
    localStorage.clear();
};

//Create object to export
const objectToExport = {
    get: get,
    set: set,
    remove: remove,
    clear: clear,
};

//Export object to use it in App component
export default objectToExport;