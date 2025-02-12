import { Metadata } from "next";
export const metadata: Metadata = {
  title: "TEDxSIST | Events",
  description: "TEDxSIST Blogs and Articles",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
