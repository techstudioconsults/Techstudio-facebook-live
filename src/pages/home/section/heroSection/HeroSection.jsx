import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./heroSection.css";
import { Button } from "@chakra-ui/react";
import RegistrationModal from "../../../../component/Modal";
import CourseBanner from "../../../../component/CourseBanner";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  const  baseUrl= 'https://express.techstudio.academy/api/v1'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.post(baseUrl, data);
      console.log(res);

      if (res.status === 200) {
        setIsSuccessModalOpen(true);
      } else {
        setIsErrorModalOpen(true);
      }
    } catch (error) {
      setIsErrorModalOpen(true);
    }

    setIsLoading(false);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
    reset(); // Clear the form
  };

  const handleErrorModalClose = () => {
    setIsErrorModalOpen(false);
  };

  return (
    <section className="hero_section">
      <div className="hero_section-content cc-container">
        <div className="hero_section-header">
          <h2>Beginners Frontend Development Course (Online)</h2>
          <p>
            Learn all you need to start a career as a Frontend Developer and
            start building interesting and simple websites and landing pages
            while learning the fundamentals of Web Development.
          </p>
        </div>

        <div className="form-control">
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <p>
              Register to learn more about the program pricing and curriculum
            </p>
            <div className="form-user">
            
              <div className="form-user_name">
                <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    translate: ".5rem .1rem",
                    whiteSpace:"nowrap",
                    fontSize:`.75rem`
                  }}
                >
                  {errors?.firstName?.message}
                </span>
                <input
                  type="text"
                  placeholder="First Name"
                  className="text"
                  id={`firstName`}
                  name={`lastName`}
                  {...register("firstName", {
                    required: "First Name is required",
                    pattern: {
                      value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                      message: (
                        <Text>
                          Name must start with capital letter, special character
                          is allowed <br /> but optional and it must not end
                          with an hyphen
                        </Text>
                      ),
                    },
                  })}
                />
               
              </div>

              <div>
              <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    translate: ".5rem .1rem",
                    whiteSpace:"nowrap",
                    textAlign:"start",
                    fontSize:`.75rem`
                  }}
                >
                  {errors?.lastName?.message}
                </span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="text"
                  id={`lastName`}
                  name={`lastName`}
                  {...register("lastName", {
                    required: "Last Name is required",
                    pattern: {
                      value: /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/,
                      message: (
                        <Text>
                          Name must start with capital letter, special character
                          is allowed <br /> but optional and it must not end
                          with an hyphen
                        </Text>
                      ),
                    },
                  })}
                />
                
              </div>
            </div>

            <div>
              <div>
              <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    translate: ".5rem .1rem",
                    whiteSpace:"nowrap",
                    fontSize:`.75rem`
                  }}
                >
                  {errors?.email?.message}
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@ .]{2,}$/,
                      message: "Email is not valid.",
                    },
                  })}
                />
                
              </div>
            </div>

            <div>
              <div>
              <span
                  style={{
                    color: "red",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    translate: ".5rem 1.3rem",
                    whiteSpace:"nowrap",
                    fontSize:`.75rem`
                    // margin: ".5rem   1rem",
                  }}
                >
                  {errors?.phoneNumber?.message}
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="tel"
                  name={`phoneNumber`}
                  {...register("phoneNumber", {
                    required: "Enter phone number",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
                      message: "Phone number must not contain text",
                    },
                  })}
                />
                
              </div>
            </div>

            <Button
              type={`submit`}
              isLoading={isLoading}
              loadingText="Registering..."
              _hover={{bgColor: `blue.300`, opacity:1}}
              className="button"
            >
              Get Program Package
            </Button>
          </form>
        </div>
      </div>

      <RegistrationModal
        isOpen={isSuccessModalOpen}
        onClose={handleSuccessModalClose}
        isSuccess={true}
        isError={false}
      />

      {/* Error Modal */}
      <RegistrationModal
        isOpen={isErrorModalOpen}
        onClose={handleErrorModalClose}
        isSuccess={false}
        isError={true}
      />

      <CourseBanner />




    </section>
  );
};

export default HeroSection;

// const HeroSection = () => {
//   return (
//     <div>HeroSection</div>
//   )
// }

// export default HeroSection
