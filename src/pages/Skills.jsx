import puzzle from "../assets/puzzle.jpeg";

export default function Skills() {
  return (
      <div className="relative">
        {/* Full background */}
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${puzzle})` }}
        />
      </div>
  );
}
