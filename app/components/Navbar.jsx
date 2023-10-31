import Link from "next/link";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Mohlaroyim's Next App</Link>
      </div>
      <div className="links">
        <Link href="/about">About</Link>
        <Link href="/about/team">Our Team</Link>
        <Link href="/code/repos">Code</Link>
      </div>
    </header>
  );
}

export default Navbar;
