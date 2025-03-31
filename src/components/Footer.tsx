import React from "react";

const Footer = () => {
  const footerNavLinks = [
    {
      name: "About Wiley",
      links: [
        { name: "Corporate Responsibility", path: "/" },
        { name: "Corporate Governance", path: "/" },
        { name: "Leadership Team", path: "/" },
        { name: "Investors", path: "/" },
        { name: "Careers", path: "/" },
      ],
    },
    {
      name: "ABOUT ALTA",
      links: [
        { name: "Alta Support", path: "/" },
        { name: "Accessibility", path: "/" },
        { name: "Terms of Service", path: "/" },
        { name: "Terms of service Order Form", path: "/" },
        { name: "Terms of Services Enterprise", path: "/" },
      ],
    },
    {
      name: "MY ACCOUNT",
      links: [
        { name: "Help", path: "/" },
        { name: "Contact", path: "/" },
      ],
    },
  ];

  return (
    <div className="py-20 text-white bg-black">
      <div className="max-w-screen-2xl mx-auto">
        <div className="px-padLR">
          <div className="flex justify-between gap-8">
            <div className="flex gap-6 flex-col font-bold">
              <a className="hover:underline" href="/">
                FOR INDIVIDUALS
              </a>
              <a className="hover:underline" href="/">
                FOR INSTITUTIONS & BUSINESSES
              </a>
              <a className="hover:underline" href="/">
                WILEY NETWORK
              </a>
              <a className="hover:underline" href="/">
                NEWSROOM
              </a>
            </div>
            {footerNavLinks.map((item, index) => (
              <div key={index}>
                <h1 className="font-bold underline">{item.name}</h1>
                <ul className="flex flex-col gap-4 text-secwhite mt-6">
                  {item.links.map((link, index) => (
                    <li className="hover:underline text-sm" key={index}>
                      <a href={link.path}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <hr className="mt-10 text-secwhite" />
            <div className="flex gap-6 justify-between mt-10">
              <p className="text-secwhite text-sm w-[40%]">
                Copyright @ 2000-2025 by John Wiley & Sons, Inc., or related
                companies. All rights reserved, including rights for text and
                data mining and training of artificial technologies or similar
                technologies.
              </p>
              <div className="flex gap-4 w-1/2 text-xs">
                <a href="/" className="hover:underline border-l h-max px-4 w-max">
                  Language/Location
                </a>
                <a href="/" className="hover:underline border-l h-max px-4 w-max">
                  Site Map
                </a>
                <a href="/" className="hover:underline border-l h-max px-4 w-max">
                  Rights & Permissions
                </a>
                <a href="/" className="hover:underline border-l h-max px-4 w-max">
                  Privacy Policy
                </a>
                <a href="/" className="hover:underline border-l h-max px-4 w-max">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
