import React from "react";
import Link from "next/link";
import Head from "next/head";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <Head>
        <title>Contact Me</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="space-y-4">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/"
          >
            <p className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition-colors mr-2">
              <LinkedInIcon className="w-6 h-6 mr-2" />
              LinkedIn
            </p>
          </Link>
          <Link href="mailto:mail@mail.com">
            <p className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition-colors">
              <EmailIcon className="w-6 h-6 mr-2" />
              Email
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
