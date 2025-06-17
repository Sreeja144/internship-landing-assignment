import React from 'react';
import { Leaf, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Pure, organic ingredients sourced from sustainable farms worldwide.'
    },
    {
      icon: Award,
      title: 'Dermatologist Tested',
      description: 'Clinically tested and approved by leading skincare professionals.'
    },
    {
      icon: Heart,
      title: 'Cruelty-Free',
      description: 'Never tested on animals. Committed to ethical beauty practices.'
    },
    {
      icon: Shield,
      title: 'Safe Formula',
      description: 'Hypoallergenic formulas suitable for all skin types and ages.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Science Meets
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> Beauty</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our revolutionary skincare line combines cutting-edge scientific research 
            with the purest natural ingredients to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                15 Years of Innovation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded by renowned dermatologist Dr. Sarah Chen, our brand represents 
                a commitment to transforming skincare through innovative formulations 
                and sustainable practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every product is meticulously crafted in our FDA-approved facilities, 
                ensuring the highest standards of quality and safety for your skin.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg"
                alt="Dr. Sarah Chen"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">Dr. Sarah Chen</div>
                <div className="text-gray-600">Founder & Chief Scientist</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg"
              alt="Skincare laboratory"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Products Sold</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
