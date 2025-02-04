const About = (): JSX.Element => {
  // A simple about page
  return (
    <div className=" py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          About Shoppy Globe
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          Welcome to Shoppy Globe, your one-stop destination for premium
          products from around the world. We are committed to bringing you the
          best shopping experience with a wide range of products, unbeatable
          prices, and exceptional customer service. Our goal is to provide a
          seamless and enjoyable online shopping experience for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              At ShoppyGlobe, our mission is to make shopping easy, fun, and
              accessible for everyone. We strive to offer a diverse selection of
              products, ranging from electronics to fashion, all at competitive
              prices. Our goal is to provide a platform where customers can
              discover new products and find exactly what they need with ease.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Shop With Us?</h2>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Wide variety of products from trusted brands</li>
              <li>Fast and secure checkout process</li>
              <li>Excellent customer support</li>
              <li>Easy returns and refunds</li>
              <li>Regular discounts and special offers</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 text-center">
            If you have any questions or feedback, feel free to{" "}
            <a href="/contact" className="text-blue-500 underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
