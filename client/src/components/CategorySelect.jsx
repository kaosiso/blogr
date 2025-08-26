import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown, X } from "lucide-react";
import { categories } from "../data/categories";

export default function CategorySelect({ value = [], onChange }) {
  const removeCategory = (cat) => {
    onChange(value.filter((v) => v !== cat));
  };

  return (
    <div className="w-full sm:w-3/4 md:w-1/2">
      <label className="block mb-2 font-medium text-sm sm:text-base md:text-lg">
        Categories
      </label>
      <Listbox value={value} onChange={onChange} multiple>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg border bg-white py-2 pl-3 pr-10 text-left min-h-[60px] text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400 flex flex-wrap gap-2 items-center">
            {value.length > 0 ? (
              value.map((cat) => (
                <span
                  key={cat}
                  className="flex items-center gap-1 rounded-md bg-gray-200 px-2 py-1 text-sm text-gray-800"
                >
                  {cat}
                  <button
                    type="button"
                    className="text-gray-600 hover:text-black"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeCategory(cat);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </span>
              ))
            ) : (
              <span className="text-gray-400">Select categories</span>
            )}
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
                  value={cat}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-black" : "text-gray-700"
                    }`
                  }
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
