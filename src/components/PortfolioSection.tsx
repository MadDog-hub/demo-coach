import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import transformation1 from '@/assets/transformation-1.jpg';
import transformation2 from '@/assets/transformation-2.jpg';
import transformation3 from '@/assets/transformation-3.jpg';

const PortfolioSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const transformations = [
    {
      image: transformation1,
      name: 'Sarah Johnson',
      profession: 'Marketing Manager',
      timeframe: '6 months',
      results: 'Lost 35 lbs, gained confidence',
      quote: 'Andrei helped me completely transform not just my body, but my relationship with fitness and nutrition.'
    },
    {
      image: transformation2,
      name: 'Mike Chen',
      profession: 'Software Engineer',
      timeframe: '8 months',
      results: 'Built 15 lbs muscle, improved strength',
      quote: 'The personalized approach made all the difference. Finally found a sustainable routine that fits my busy schedule.'
    },
    {
      image: transformation3,
      name: 'Jessica Rodriguez',
      profession: 'Business Executive',
      timeframe: '4 months',
      results: 'Lost 25 lbs, ran first marathon',
      quote: 'I never thought I could be an athlete. Andrei proved me wrong and changed my life forever.'
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'Investment Banker',
      rating: 5,
      quote: 'Andrei\'s coaching completely transformed my approach to fitness. Despite my 80-hour work weeks, I\'ve never been in better shape.',
      avatar: 'DT'
    },
    {
      name: 'Lisa Williams',
      role: 'Startup Founder',
      rating: 5,
      quote: 'The accountability and personalized approach made all the difference. I finally found a sustainable way to stay healthy while building my company.',
      avatar: 'LW'
    },
    {
      name: 'Robert Martinez',
      role: 'Consultant',
      rating: 5,
      quote: 'Three years later, I\'m still following the principles Andrei taught me. This isn\'t just a program - it\'s a lifestyle change.',
      avatar: 'RM'
    },
    {
      name: 'Emily Chang',
      role: 'Doctor',
      rating: 5,
      quote: 'As a healthcare professional, I appreciate Andrei\'s evidence-based approach. The results speak for themselves.',
      avatar: 'EC'
    }
  ];

  const successMetrics = [
    { number: '500+', label: 'Clients Transformed', description: 'Worldwide success stories' },
    { number: '98%', label: 'Success Rate', description: 'Client goal achievement' },
    { number: '4.9/5', label: 'Average Rating', description: 'Client satisfaction score' },
    { number: '10+', label: 'Years Experience', description: 'Professional coaching' }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real People, <span className="gradient-text">Real Transformations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the incredible results achieved by busy professionals just like you. 
            These transformations represent months of dedicated work and sustainable lifestyle changes.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-lg hover-lift">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client Transformations */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Client Transformations</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <div key={index} className="transformation-card">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={transformation.image}
                    alt={`${transformation.name} transformation`}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold">{transformation.name}</h4>
                      <p className="text-muted-foreground">{transformation.profession}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">{transformation.timeframe}</div>
                    </div>
                  </div>
                  <div className="bg-success/10 rounded-lg p-3 mb-4">
                    <p className="text-success font-semibold">{transformation.results}</p>
                  </div>
                  <blockquote className="text-muted-foreground italic">
                    "{transformation.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-secondary/30 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-12">What My Clients Say</h3>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex-1 mx-8">
                <div className="testimonial-card">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                </div>
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;