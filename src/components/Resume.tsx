import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="px-6 py-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-6">Resume</h3>
      <div className="glass p-6 rounded-xl space-y-4">
        <div>
          <h4 className="text-xl font-semibold">Profile</h4>
          <p className="text-gray-300">
            Aspiring software engineer with a passion for full-stack development
            and modern UI/UX design.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Skills</h4>
          <ul className="list-disc pl-5 text-gray-300">
            <li>JavaScript, React, Tailwind CSS</li>
            <li>Node.js, Express, REST APIs</li>
            <li>SQL, Firebase, Supabase</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
