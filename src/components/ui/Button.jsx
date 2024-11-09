// components/ui/Button.jsx
export const Button = ({ 
    children, 
    className = "", 
    variant = "default", 
    size = "default",
    type = "button",
    ...props 
  }) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-slate-900 text-white hover:bg-slate-800",
      outline: "border border-slate-200 hover:bg-slate-100",
      destructive: "bg-red-500 text-white hover:bg-red-600",
    };
  
    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-8 px-3 text-sm",
      lg: "h-12 px-8",
    };
  
    return (
      <button
        type={type}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  