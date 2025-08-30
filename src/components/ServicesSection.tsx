import { Star, Users, Utensils, User, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <User className="w-8 h-8" />,
      title: '1:1 Online Coaching',
      price: '₱4,999',
      period: '/month',
      popular: true,
      features: [
        'Personalized workout plans',
        'Weekly check-ins and adjustments',
        'Direct access via messaging',
        'Progress tracking and analytics',
        'Nutrition guidance included',
        'Form review and feedback'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Group Programs',
      price: '₱2,499',
      period: '/challenge',
      popular: false,
      features: [
        '6-week transformation challenges',
        'Group support community',
        'Weekly group coaching calls',
        'Structured workout programs',
        'Meal planning templates',
        'Progress competitions and rewards'
      ]
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Nutrition Plans',
      price: '₱3,999',
      period: '/one-time',
      popular: false,
      features: [
        'Customized meal plans',
        'Macro and calorie calculations',
        'Recipe database access',
        'Supplement recommendations',
        'Grocery shopping lists',
        '30-day meal prep guide'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Services & Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect program that fits your lifestyle and goals. 
            All programs include comprehensive support and proven methodologies.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={service.popular ? 'service-card-popular' : 'service-card'}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-primary mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-primary">{service.price}</span>
                  <span className="text-muted-foreground ml-1">{service.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:scale-105'
                    : 'bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div id="contact" className="bg-card rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="gradient-text">Fitness Journey?</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch to discuss your goals and find the perfect program for your lifestyle. 
              I respond to all inquiries within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-2">Email</h4>
              <p className="text-muted-foreground">maddogruel@gmail.com</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <Facebook className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-2">Facebook</h4>
              <p className="text-muted-foreground">@CoachAndreiOfficial</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <Instagram className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-2">Instagram</h4>
              <p className="text-muted-foreground">@CoachAndrei</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-primary mb-2">WhatsApp</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;