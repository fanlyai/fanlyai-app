export default function CustomSelect({ options, defaultValue, onChange, placeholder }) {
    return (
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-[4px] pr-8 rounded-2xl shadow leading-tight focus:outline-none focus:shadow-outline"
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.576 0 0.436 0.445 0.408 1.197 0 1.615l-4.695 4.502c-0.436 0.418-1.044 0.418-1.48 0l-4.695-4.502c-0.408-0.418-0.436-1.17 0-1.615z"/>
          </svg>
        </div>
      </div>
    );
  }
  
