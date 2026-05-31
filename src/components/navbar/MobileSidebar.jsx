import { Link, useLocation } from "react-router-dom";
import { Shield, X, LogOut } from "lucide-react";
import { mobileNavLinks } from "../../data/navLinks";

function MobileSidebar({ isOpen, onClose, operatorName, onLogout }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const initial = operatorName ? operatorName.charAt(0).toUpperCase() : "O";

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: "280px",
          backgroundColor: "#07090f",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(to right,transparent,rgba(99,102,241,0.5),transparent)",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Shield size={15} color="#818cf8" />
            <span
              style={{
                fontSize: "11px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#fff",
              }}
            >
              Menu
            </span>
          </div>
          <button
            onClick={onClose}
            style={{
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              border: "none",
              background: "rgba(255,255,255,0.04)",
              color: "#94a3b8",
              cursor: "pointer",
            }}
          >
            <X size={15} />
          </button>
        </div>

        {/* User card */}
        <div
          style={{
            margin: "14px 16px 0",
            padding: "12px 14px",
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.18)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 900,
              fontSize: "14px",
              flexShrink: 0,
              textTransform: "uppercase",
            }}
          >
            {initial}
          </div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 900,
                color: "#fff",
                textTransform: "uppercase",
                margin: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {operatorName}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "3px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#34d399",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 700,
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Active Session
              </span>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "10px 12px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {mobileNavLinks.map(({ path, label, icon: Icon }) => {
            const active = isActive(path);
            return (
              <Link
                key={path}
                to={path}
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "11px 14px",
                  borderRadius: "10px",
                  fontSize: "11px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  color: active ? "#fff" : "#94a3b8",
                  backgroundColor: active ? "#4f46e5" : "transparent",
                  boxShadow: active
                    ? "0 2px 14px rgba(99,102,241,0.3)"
                    : "none",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                }}
              >
                <Icon size={16} style={{ flexShrink: 0 }} />
                {label}
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div style={{ padding: "0 12px 24px", flexShrink: 0 }}>
          <div
            style={{
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.06)",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "11px 14px",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#f87171",
              backgroundColor: "rgba(239,68,68,0.07)",
              border: "1px solid rgba(239,68,68,0.12)",
              cursor: "pointer",
              transition: "all 0.25s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ef4444";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(239,68,68,0.07)";
              e.currentTarget.style.color = "#f87171";
            }}
          >
            <LogOut size={15} style={{ flexShrink: 0 }} />
            <span>Logout Account</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;
