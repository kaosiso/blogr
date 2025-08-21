import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

const categories = ["Branding", "Marketing", "Design", "Business"];

export default function CategorySelect({ value, onChange }) {
  return (
    <div className="w-full  sm:w-3/4 md:w-1/2 ">
      <label className="block mb-2 font-medium text-sm sm:text-base md:text-lg">
        Category
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg border bg-white py-2 pl-3 pr-10 text-left text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400">
            <span className="block truncate">{value || "Select category"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm">
              {categories.map((cat) => (
                <Listbox.Option
                  key={cat}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-black" : "text-gray-700"
                    }`
                  }
                  value={cat.toLowerCase()}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {cat}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
