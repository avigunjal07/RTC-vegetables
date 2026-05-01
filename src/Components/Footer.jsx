import GithubIcon from "../assets/github.png";
import LinkedinIcon from "../assets/linkedin.png";
import GmailIcon from "../assets/gmail.png";

function Footer() {
  return (
    <footer className="bg-[#346739] text-white py-4 mt-10">
      <div className="flex flex-row items-center justify-center gap-50">

        <p className="text-lg">
          Owner: <span className="font-semibold">Avishkar Gunjal</span> | All rights reserved 2026
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/avigunjal07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-10 h-10 "
            />
          </a>

          <a
            href="https://www.linkedin.com/in/avishkar-gunjal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedinIcon}
              alt="LinkedIn"
              className="w-10 h-10 "
            />
          </a>

          <a href="mailto:avishkargunjal07@gmail.com">
            <img
              src={GmailIcon}
              alt="Gmail"
              className="w-10 h-10 "
            />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;