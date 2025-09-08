import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Custom Page",
  description: "This is my custom page",
};

export default function MyCustomPageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
