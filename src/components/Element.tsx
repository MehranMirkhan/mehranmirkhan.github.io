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

  export const CompactSegment = ({ children, title }: any) => (
    <div className="relative bg-gray-50 p-6 pt-2 rounded-lg shadow-lg ring-1 ring-inset ring-gray-300">
      {title ? (
        <div className="absolute top-0 left-0 w-full -translate-y-1/2">
          <h1 className="w-fit mx-auto px-2 py-0 text-lg font-copperplate bg-gray-50 rounded-full overflow-hidden">
            {title}
          </h1>
        </div>
      ) : null}
      {children}
    </div>
  );

  export const Label = ({ children }: any) => (
    <div className="bg-gray-700 text-gray-100 px-3 py-1 rounded-lg">
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
