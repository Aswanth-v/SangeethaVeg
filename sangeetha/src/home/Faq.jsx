import { useState } from "react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* PANEL */}
      {open && (
        <div className="mb-3 w-64 bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-4 border border-white/20">
          <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
          
          <p className="text-sm text-gray-600">
            📧 support@example.com
          </p>
          
          <p className="text-sm text-gray-600">
            📞 +91 98765 43210
          </p>
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gold text-black text-xl shadow-lg hover:scale-110 transition"
      >
        {open ? "✕" : "?"}
      </button>
    </div>
  );
};

export default FloatingContact;