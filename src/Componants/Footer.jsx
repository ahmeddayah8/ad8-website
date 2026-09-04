
import { NavLink } from "react-router";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-4xl">AD8 Real Estate</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Wxaan ka caawineyna in aad hsho guri ku habboon baahidaada iyo
              miisaaniyaddaada.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/axmed.maxamed.104952"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
              >
                f
              </a>

              <a
                href="https://x.com/AhamedDaya90346"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
              >
                X
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-abdisalam/?trk=public-profile-join-page"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li>
                <NavLink to="/agents">Agents</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold">Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>Guryo La Iibiyo</li>
              <li>Guryo La Kireeyo</li>
              <li>Hanti Ganacsi</li>
              <li>Wakiillo Hantiyeed</li>
              <li>La-talin Hantiyeed</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <span>📍</span>
                <span>Mogadishu, Taxleex</span>
              </li>

              <li className="flex gap-3">
                <span>📞</span>
                <span>+252 61 4596290</span>
              </li>

              <li className="flex gap-3">
                <span>✉️</span>
                <span>info@ad8.com</span>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <p className="font-bold text-center">AD8 © {currentYear} - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
