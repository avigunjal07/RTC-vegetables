// import { Instagram, Linkedin } from "lucide-react";
// // import {Github} from "lucide-react";


// const SOCIAL_LINKS = [
//   {
//     name: "GitHub",
//     url: "https://github.com/avigunjal07",
//     // icon: <Github className="inline-block" />,
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/avishkar-gunjal/",
//     icon: <Linkedin className="inline-block" />,
//   },
// //   {
// //     name: "Instagram",
// //     url: "https://www.instagram.com/avi_gunjal_2507/",
// //     icon: <Instagram className="inline-block" />,
// //   }
// ,
// ];

// const FooterLink = ({ name, url, icon }) => {
//   return (
//     <a href={url} className="mx-2 mr-3 align-middle">
//       {icon}

//       <span className="ml-1">{name}</span>
//     </a>
//   );
// };

// function Footer() {
//   return (
//     <div className="w-full bg-white px-10 py-4 flex justify-around">
//       <div>
//         Owner <span style={{ color: "red" }}>Avishkar Sopan Gunjal</span> | All rights reserved 2026
//       </div>

//       <div>
//         {SOCIAL_LINKS.map(({ name, url, icon }) => {
//           return <FooterLink key={name} name={name} url={url} icon={icon} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Footer;