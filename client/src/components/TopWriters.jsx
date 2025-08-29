import { BsThreeDotsVertical } from "react-icons/bs";

export default function TopWriters() {
  const writers = [
    { name: "Anne Johnson", followers: "19,9k Followers" },
    { name: "Anne Johnson", followers: "19,9k Followers" },
    { name: "Anne Johnson", followers: "19,9k Followers" },
  ];

  return (
    <div className=" w-full text-gray-700  rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-4">Top Writers</h2>
      <div className="space-y-4">
        {writers.map((writer, index) => (
          <div
            key={index}
            className="flex items-center  justify-between  rounded-xl"
          >
            {/* Avatar + Name */}
            <div className="flex items-center space-x-3">
              <div className="w-[40px] h-[40px] rounded-full bg-blue-300 flex items-center justify-center text-white font-bold">
                <span>👩</span>
              </div>
              <div>
                <p className="font-semibold">{writer.name}</p>
                <p className="text-sm text-gray-400">{writer.followers}</p>
              </div>
            </div>

            {/* Menu Icon */}
            <BsThreeDotsVertical className="text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}
