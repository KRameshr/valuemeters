import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import NavLogo from "./navbar/NavLogo";
import NavLinks from "./navbar/NavLinks";
import NavUser from "./navbar/NavUser";
import MobileSidebar from "./navbar/MobileSidebar";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const operatorName = user?.name || "OPERATOR";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-[#07090f] border-b border-white/[0.05]">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">
          <NavLogo />
          <NavLinks />
          <NavUser
            operatorName={operatorName}
            onLogout={handleLogout}
            onMenuOpen={() => setIsMobileMenuOpen(true)}
          />
        </div>
      </nav>

      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        operatorName={operatorName}
        onLogout={handleLogout}
      />
    </>
  );
}

export default Navbar;
