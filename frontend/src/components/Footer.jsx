import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              className="mb-5"
              height={5}
              width={50}
              src={assets.logo}
              alt="CarePlus"
            />
            <h2 className="text-3xl font-bold">
              <span className="text-purple-700">Care</span>
              <span className="text-green-600">Plus</span>
            </h2>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            CarePlus is your trusted platform for booking doctor appointments
            across the country. We connect patients with verified specialists
            and make healthcare access simple.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Our Doctors</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>📞 +998 (90) 123-45-67</li>
            <li>✉️ support@careplus.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          ©2025 CarePlus. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
