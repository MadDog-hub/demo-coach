import heroImage from '@/assets/2nd-transformation.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '500+', label: 'Clients Transformed' },
    { number: '10+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-background to-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Body and Mind
                <span className="gradient-text block">
                  with Coach Andrei Santos
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Personalized fitness programs designed for busy professionals. 
                Achieve sustainable results with expert guidance and ongoing support.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-hero-primary"
              >
                Book a Free Consultation
              </button>
              <button className="btn-hero-secondary">
                Watch Success Stories
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="pseudo-3d">
              <img
                src={heroImage}
                alt="Coach Andrei Santos"
                className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;