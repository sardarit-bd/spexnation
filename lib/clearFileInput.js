const clearFileInput = (fileInputRef) => {
    if (fileInputRef.current) {
        fileInputRef.current.value = null;
    }
};

export default clearFileInput;