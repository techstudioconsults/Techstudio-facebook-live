import React from "react";
import "./Audience.css"; // Import the CSS file with the correct casing

const Audience = () => {
  return (
    <section className="audience-section"> {/* Renamed className for consistency */}
      <h2>Our Target Audience</h2>

      <div className="audience-container cc-container"> {/* Renamed className for consistency */}
        {/* Audience Card 1 */}
        <div className="audience-card">
          <img
            src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberOne_iorpb9.webp"
            alt="Aspiring Developers"
          />
          <h3>Aspiring Developers</h3>
          <p>
            Perfect for individuals looking to start a career in frontend
            development.
          </p>
        </div>

        {/* Audience Card 2 */}
        <div className="audience-card">
          <img
            src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberTwo_tjclgg.webp"
            alt="Students"
          />
          <h3>Students</h3>
          <p>
            Complement your education with practical web development skills.
          </p>
        </div>

        {/* Audience Card 3 */}
        <div className="audience-card">
          <img
            src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberThree_ludnkx.webp"
            alt="Career Changers"
          />
          <h3>Career Changers</h3>
          <p>
            Transition into the tech industry with a sought-after skill set.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Audience;



























// import React from "react";
// import "./audience.css"

// const Audience = () => {
//   return (
//     <section className="audience_section">
//         <h2>Our Target Audience</h2>

//       <div className="audience cc-container">
//         <div>
//           <img
//             src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberOne_iorpb9.webp"
//             alt=""

//           />
//           <h3>Aspiring Developers</h3>
//           <p>
//             Perfect for individuals looking to start a career in frontend
//             development.
//           </p>
//         </div>

//         <div>
//           <img
//             src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberTwo_tjclgg.webp"
//             alt=""
//           />
//           <h3>Students </h3>
//           <p>
//             Complement your education with practical web development skills.
//           </p>
//         </div>

//         <div>
//           <img
//             src="https://res.cloudinary.com/dkszgtapy/image/upload/v1686218526/techstudio-web-app/assets/images/numberThree_ludnkx.webp"
//             alt=""
//           />
//           <h3>Career Changers: </h3>
//           <p>
//             Transition into the tech industry with a sought-after skill set.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Audience;

