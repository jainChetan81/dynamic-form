import crypto from "crypto";

export function generateUUID() {
	// Generate 16 random bytes
	const bytes = crypto.randomBytes(16);

	// Set the version (4) and variant (2) bits
	bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
	bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 2

	// Convert bytes to hexadecimal string
	const uuid = bytes.toString("hex");

	// Format the UUID
	return `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(12, 16)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
}
