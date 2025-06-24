import React from "react";
import coverImage from "../../assets/showcase.jpg";

const DirectoryCaseStudy = () => {
  return (
    <div className="directory-case-study max-width-wrap">
      <div className="case-study">
        <div className="case-study__subtitle">Case Study</div>
        <div className="case-study__title">Parish Directory</div>
        <div className="case-study__cover">
          <img src={coverImage} alt="" />
        </div>
        <section>
          <div className="case-study__sub-heading">Introduction</div>
          <p>
            The Parish Directory is a digital platform designed to help church
            members stay connected by providing an organized, searchable
            directory of families and individuals. The project was initiated to
            modernize the traditional paper-based directory and offer a more
            interactive, user-friendly experience.
          </p>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Motivation</div>
          <p>
            As an active member of the church, I noticed the challenge of
            maintaining and accessing updated member information. Although we
            had published a printed directory, but it was always in the wrong
            place at the wrong time—either gathering dust at home or playing
            hide and seek when needed. So, I decided to create a digital
            directory that allows members and office bearers to quickly search
            for families, view member details, and update information on the go.
            Plus, let’s be real—I wanted to do something more useful than yet
            another to-do list project while levelling up my React.js skills.
          </p>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">
            Target Users & Use Cases
          </div>
          <ul>
            <li>
              <span>Office Bearers</span> – Need quick access to contact details
              for coordination (and don’t want to rely on their memory alone).
            </li>
            <li>
              <span>Church Members</span> – Can easily look up family details
              without making awkward “Who’s that again?”
            </li>
          </ul>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Key Features</div>
          <ul className="case-study__key-features">
            <li>
              <span>Search & Filtering</span> – Users can quickly find members
              by name, family, or category.
            </li>
            <li>
              <span>CRUD Operations</span> – The system allows creating,
              updating, and deleting family and member records.
            </li>
            <li>
              <span>Photo Upload & Viewing</span> – Members’ images can be
              stored and accessed within the directory.
            </li>
            <li>
              <span>Dark Mode Support</span> – Adapts to system preferences for
              better user experience.
            </li>
          </ul>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Data Management</div>
          <p>
            I initially started off storing data in a JSON file and hosting it
            using json-server. While it worked well locally, it wasn’t a viable
            solution for deployment since the data wouldn’t persist.
          </p>
          <p>
            Having used Firebase before, I thought it was a good idea—until I
            realized it stored data as <code>{`{objects of objects}`}</code>{" "}
            instead of an <code>{`[array of objects]`}</code>. Not exactly what
            I needed.
          </p>
          <p>
            After a few hours of searching for a free database solution, I
            discovered Supabase. Their tagline, “an alternative to Firebase,”
            caught my attention, and fortunately, they supported storing data as
            an <code>{`[array of objects]`}</code>. I leveraged Supabase for
            structured data storage and retrieval, improving performance and
            ease of access.
          </p>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Challenges Faced</div>
          <p>
            Throughout the development of this project, I encountered several
            technical and design challenges, but one major hurdle stood out:
          </p>
          <p>
            <strong>Database Structure & Table Relationships:</strong> I
            initially planned to have a single table containing both family
            headers and family members. However, this approach resulted in a
            flat table structure that was difficult to read and manage. Since I
            didn’t have backend support, I hesitated to create two separate
            tables. Eventually, I realized that splitting the data was the only
            viable solution. I created a table for the main family data and
            another for family members, linking them via a foreign key and
            enabling the cascade option. The frontend was then responsible for
            joining the data, matching and filtering IDs to create structured
            objects. The same logic was applied when submitting data—ensuring
            that entries were properly assigned to both tables based on the form
            submission criteria.
          </p>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">
            Design & Development Approach
          </div>
          <p>
            To bring the project to life, I implemented the following solutions:
          </p>

          <ul className="case-study__features">
            <li>
              Built the frontend using <strong>React.js</strong>, leveraging a
              component-based architecture for modularity and maintainability.
            </li>
            <li>
              Structured the layout with HTML and SCSS, following the{" "}
              <i>BEM methodology</i> for naming conventions and partials for
              better organization.
            </li>
            <li>
              Used Framer Motion to enhance user experience with smooth
              animations.
            </li>
            <li>
              Implemented a Dark Mode toggle in the web version. On mobile,
              following the pattern of graceful degradation, the toggle was
              removed, and the theme adapted to the device's system preference.
            </li>
            <li>
              Used Yup for form validation to ensure data integrity and a smooth
              user experience.
            </li>
            <li>
              Integrated Font Awesome for icons, maintaining a clean and
              visually appealing design.
            </li>
          </ul>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Outcome & Impact</div>
          <p>
            The parish directory successfully streamlined member search and data
            management within the church community. The digital transition made
            the information easily accessible at any time. The feedback from
            users was overwhelmingly positive, with many appreciating the
            simplicity and efficiency of the directory. The project also
            provided me with valuable hands-on experience in React development,
            database integration, and UI/UX design.
          </p>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Learnings & Next Steps</div>
          <p>
            This project strengthened my skills in React, database management,
            and UI/UX design. I learned how to handle real-world data
            structures, implement efficient filtering techniques, and optimize
            frontend performance.
          </p>
          <p>For future improvements, I would like to: </p>
          <ul className="case-study__improvement-points">
            <li>
              a) Implement user authentication to restrict access to authorized
              members.
            </li>
            <li>
              b) Introduce role-based permissions, allowing different levels of
              access for administrators, office bearers, and general users.
            </li>
          </ul>
          <img src="" alt="" />
        </section>

        <section>
          <div className="case-study__sub-heading">Conclusion</div>
          <p>
            My primary objective when creating this project was to gain
            experience in React, but what started as a technical challenge
            evolved into a meaningful contribution to the church community.
            While refining my skills in UX and React, this project reinforced my
            problem-solving abilities and adaptability to new technologies.
          </p>

          <img src="" alt="" />
        </section>
      </div>
    </div>
  );
};

export default DirectoryCaseStudy;
