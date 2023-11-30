import LayoutNavbar from "./navbar";

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <LayoutNavbar />
      <main>{children}</main>
    </>
  )
}