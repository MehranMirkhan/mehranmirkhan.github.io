export function extractChildren(children, ...types) {
  return [
    ...types.map((type) => children.filter((child) => child.type === type)),
    children.filter((child) => types.indexOf(child.type) === -1),
  ];
}

export const isBrowser = () => typeof window !== "undefined";
