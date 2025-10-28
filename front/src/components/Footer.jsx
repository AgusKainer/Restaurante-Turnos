export default function Footer() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-white">
          Seguinos en Instagram
        </h2>
        <div className="flex justify-center items-center mt-10">
          <img
            src="/assets/images/instagram.jpeg"
            alt="Instagram"
            className="h-12 w-12 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          />
        </div>
      </div>
    </div>
  );
}
