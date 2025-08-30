import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import transformation1 from '../assets/first-transformation.png';
import transformation2 from '../assets/third-transformation.png';
import transformation3 from '../assets/transformationthree.png';

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
      name: 'Jessica Rodriguez',
      profession: 'Software Engineer',
      timeframe: '8 months',
      results: 'Built 15 lbs muscle, improved strength',
      quote: 'The personalized approach made all the difference. Finally found a sustainable routine that fits my busy schedule.'
    },
    {
      image: transformation3,
      name: 'Mike Chen',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg hover-lift">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.number}
              </div>
              <div className="text-sm sm:text-base md:text-lg font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Client Transformations */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">Client Transformations</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {transformations.map((transformation, index) => (
              <div key={index} className="transformation-card">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={transformation.image}
                    alt={`${transformation.name} transformation`}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <div className="mb-2 sm:mb-0">
                      <h4 className="text-lg sm:text-xl font-bold">{transformation.name}</h4>
                      <p className="text-sm sm:text-base text-muted-foreground">{transformation.profession}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="text-xs sm:text-sm font-semibold text-primary">{transformation.timeframe}</div>
                    </div>
                  </div>
                  <div className="bg-success/10 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                    <p className="text-sm sm:text-base text-success font-semibold">{transformation.results}</p>
                  </div>
                  <blockquote className="text-sm sm:text-base text-muted-foreground italic leading-relaxed">
                    "{transformation.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-secondary/30 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">What My Clients Say</h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Mobile-first layout */}
            <div className="block sm:hidden">
              <div className="testimonial-card mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
              </div>
              
              {/* Mobile navigation */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 touch-manipulation ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:block">
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 sm:p-3 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <div className="flex-1 mx-4 sm:mx-6 md:mx-8">
                  <div className="testimonial-card">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">{testimonials[currentTestimonial].name}</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-sm sm:text-base md:text-lg text-muted-foreground italic leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                  </div>
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 sm:p-3 rounded-full bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              
              {/* Desktop dots indicator */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;