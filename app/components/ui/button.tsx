import * as React from "react";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-black text-white px-4 py-2 rounded-2xl hover:opacity-90 ${className}`}
      {...props}
    />
  );
}