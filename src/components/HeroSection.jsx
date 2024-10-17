
import backgroundImage from "../assets/background.jpg";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Background image container */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.25, // Adjust this value to change the opacity (0.15 = 15% opacity)
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center mt-4 lg:mt-8">
        <h1 className="text-blue-600 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          VR Simulated Training
          <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
            {" "}
            For International Health and Social Care Workers
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Revolutionize your international healthcare journey with HeadStart VR.
          Immersive training for pre-arrival, induction, and onboarding.
          Master essential skills in realistic scenarios.
          Launch your global career with confidence – start your 12-month program today!
        </p>
        <h3 className="mt-10 text-2xl sm:text-2xl lg:text-4xl">You are?</h3>
        <div className="flex justify-center my-6">


          <a
            href="/staff"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 mx-3 rounded-md text-xl sm:text-xl lg:text-2xl"
          >
            Staff
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 mx-3 rounded-md text-xl sm:text-xl lg:text-2xl"
          >
            Employer
          </a>

        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
