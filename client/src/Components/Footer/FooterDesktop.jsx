import React from "react";

const FooterDesktop = () => {
  return (
    <footer className="bg-white w-full hidden md:flex md:flex-col  text-gray-800 border-t">
      <div className="mx-auto px-4  py-8 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Logo & Address */}
        <div className="space-y-2">
          <img src="https://kingkisanghar.com/assets/images/kisanlogo20.png" alt="KKG Logo" className="w-32" />
          <p>Hyderabad, Telangana</p>
          <p className="text-sm text-gray-600">kingkisanghar@gmail.com</p>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold mb-2">My Account</h3>
          <ul className="space-y-1 text-sm">
            <li>Profile & Details</li>
            <li>Order History</li>
            <li>Address Manage</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold mb-2">Information</h3>
          <ul className="space-y-1 text-sm">
            <li>Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Who Are We */}
        <div>
          <h3 className="font-semibold mb-2">Who Are We?</h3>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact & App */}
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-green-600 font-semibold text-sm mt-1">
              (+91) 9014 775 214
            </p>
            <p className="text-sm mt-1">
              <span className="text-gray-700">Email Address: </span>
              <a
                href="mailto:kingkisanghar@gmail.com"
                className="text-green-600"
              >
                kingkisanghar@gmail.com
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm">Download App :</p>
            <div className="flex space-x-2 mt-1">
              <img src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg" alt="Google Play" className="h-10" />
              <img src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg" alt="App Store" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-6 pt-4 pb-2 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
        <p>©2024 Powered By Dexterous Technology</p>
        <div className="flex items-center space-x-3 mt-2 md:mt-0">
          <img src="https://kingkisanghar.com/assets/images/payment/1.png" alt="PayPal" className="h-5" />
        </div>  
      </div>
    </footer>
  );
};

export default FooterDesktop;
