import React from "react";

namespace Element {
  export const Segment = ({ children, title }: any) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg ring-1 ring-inset ring-gray-300">
      {title ? (
        <h1 className="text-center mb-8 text-3xl font-copperplate">{title}</h1>
      ) : null}
      {children}
    </div>
  );

  export const LabeledInfo = ({
    label,
    children,
  }: {
    label: string;
    children: any;
  }) => (
    <div className="flex flex-row rounded-md shadow-sm ring-1 ring-inset ring-gray-300 overflow-hidden">
      <div className="w-24 bg-gray-700 text-gray-100 px-3 py-2">{label}</div>
      <div className="text-gray-500 px-3 py-2">{children}</div>
    </div>
  );
}

export default Element;
