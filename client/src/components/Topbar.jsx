import { Search } from "lucide-react";

const Topbar = ({ searchTerm, setSearchTerm }) => {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="
        sticky top-0 z-30
        -mx-4 sm:-mx-6 lg:-mx-8
        mb-6
        bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-transparent
        border-b border-gray-300
        flex justify-start
        px-4 sm:px-6 lg:px-8
        py-3
      "
    >
      <form
        onSubmit={submit}
        className="
          flex items-center w-full max-w-xs  /* reduced width */
          bg-white rounded-full px-2 py-1
        "
      >
        <button
          type="submit"
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white" /* smaller button */
        >
          <Search className="w-4 h-4 text-black" /> 
        </button>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="ml-2 flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm"
        />
      </form>
    </div>
  );
};

export default Topbar;
