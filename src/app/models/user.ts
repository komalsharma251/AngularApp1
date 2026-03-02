
// User Interface (Data Model)
// -----------------------------------------------------
// This interface defines the structure of a User object.
// It ensures type safety and consistency across the app.
// =====================================================

export interface User {

  // User's full name
  name: string;

  // User's age (must be a number)
  age: number;

  // Path to user's profile image
  // which is  stored inside the assets folder
  profilePicture: string;

  // Indicates whether user is online or offline
  isOnline: boolean;

  // Short description or bio of the user
  bio: string;
}