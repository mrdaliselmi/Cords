import React from "react";

function WidgetLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-[#080808] rounded-2xl w-full h-full">{children}</div>;
}

export default WidgetLayout;
