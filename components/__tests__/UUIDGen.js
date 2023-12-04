function generateUUID() {
    // Generate a random array of 16 bytes (128 bits)
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);

    // Set version (4) and variant (8, 9, A, or B) bits
    randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40; // version 4
    randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80; // variant 8, 9, A, or B

    // Convert to hexadecimal format
    const hexArray = Array.from(randomBytes)
        .map(byte => byte.toString(16).padStart(2, '0'));

    // Insert hyphens to form a UUID string
    const uuid = [
        hexArray.slice(0, 4).join(''),
        hexArray.slice(4, 6).join(''),
        hexArray.slice(6, 8).join(''),
        hexArray.slice(8, 10).join(''),
        hexArray.slice(10).join('')
    ].join('-');

    return uuid;
}

export default generateUUID;