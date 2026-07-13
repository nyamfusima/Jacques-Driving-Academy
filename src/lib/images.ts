/**
 * Real student photos supplied by the client (served from /public/images).
 * Filenames are referenced with their exact case for case-sensitive hosting.
 */
export const studentPhotos = [
  "/images/student-1.jpeg",
  "/images/Student-2.jpeg",
  "/images/Student-3.jpeg",
  "/images/Student-4.jpeg",
  "/images/Student-5.jpeg",
] as const;

export const images = {
  // Hero + section imagery now uses genuine student success photos
  heroMain: "/images/Student-4.jpeg",
  about: "/images/student-1.jpeg",
  aboutStory: "/images/Student-5.jpeg",
  students: studentPhotos,
};
