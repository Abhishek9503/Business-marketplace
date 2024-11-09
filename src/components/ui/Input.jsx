// components/ui/Input.jsx
export const Input = ({ className = "", ...props }) => (
    <input
      className={`flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm 
      placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 
      disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );