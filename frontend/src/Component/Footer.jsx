import React from "react";
function Footer(){

    const customColors = {
        primary: "#61090b",    // --primary-color, --screen-red
        dark: "#000000",       // --screen-dark, --background-color
        text: "#ffffff",       // Assuming light text on dark background
        lightGray: "#f3f4f6",  // For lighter backgrounds
        mediumGray: "#9ca3af", // For secondary text
        darkGray: "#1f2937",   // For footer
      };
return(
    <div className="w-100%" >
     <footer style={{ backgroundColor: customColors.dark, color: customColors.text }} className="mt-12 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Crime News</h3>
              <p className="opacity-70">
                A news site specializing in covering crime news and criminal cases in the Arab world
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-70 hover:opacity-100">Home</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Latest News</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Investigations</a></li>
                <li><a href="#" className="opacity-70 hover:opacity-100">Donations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="opacity-70">Email: info@crimesnews.com</li>
                <li className="opacity-70">Phone: +962 6 1234567</li>
                <li className="opacity-70">Address: Amman, Jordan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="opacity-70 mb-2">Subscribe to get the latest news</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 rounded-r-none rounded-lg focus:outline-none flex-grow text-black"
                />
                <button 
                  className="text-white p-2 rounded-l-none rounded-lg hover:opacity-90"
                  style={{ backgroundColor: customColors.primary }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center opacity-70">
            <p>© 2025 Crime News - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
)

};
export default Footer;