import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="max-w-4xl text-center space-y-6 text-gray-700">
        <p className="text-lg">
          Welcome to our platform! We are dedicated to delivering high-quality products with an
          exceptional customer experience. Whether you're here to explore the latest items, add your
          favourites, or discover something new, we’ve got you covered.
        </p>

        <p className="text-lg">
          Our mission is to make shopping seamless and enjoyable. We combine technology, great
          service, and unbeatable value to give you a modern digital experience. Every product you see
          has been carefully curated to ensure satisfaction and quality.
        </p>

        <p className="text-lg">
          Thank you for choosing us. We’re constantly evolving and appreciate your support as we grow.
          If you have any questions or feedback, feel free to reach out — we’re always here to help.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +977-1234567890</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
