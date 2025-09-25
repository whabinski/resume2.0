import books from "../assets/books.jpeg";

export default function KeyCourses() {
  return (
      <div className="relative">
        {/* Full background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${books})` }}
        />
      </div>
  );
}
