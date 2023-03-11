import Link from "next/link";
import React, { FC, Key } from "react";
import { Footer as FooterData } from "~/src/clientData/footer";

const Footer: FC = () => {
  return (
    <footer className="pt-10 border-t border-solid border-[#dadce0] mt-10">
      <ul className="mx-auto flex max-w-5xl max-md:flex-col">
        {(FooterData.sections || []).map((section, index: Key) => {
          const { sectionName, sectionItems } = section || {};
          return (
            <li key={index} className="px-4 pb-8">
              <h3 className="text-black leading-6 font-bold text-lg uppercase mb-3">
                {sectionName}
              </h3>
              <ul>
                {(sectionItems || []).map(({ href, label, textForm }) => {
                  return (
                    <li key={label}>
                      <Link href={href} className="text-sm leading-6">
                        <span className={textForm}>{label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className="border-t border-solid border-[#dadce0]">
        <div className="py-5 px-4 text-center">
          <span className="text-sm">{"@ copyright Shoes Hub Inc."}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
