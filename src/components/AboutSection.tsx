import { Award, Heart, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const philosophy = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personalized Approach',
      description: 'Every program is tailored to your unique goals, lifestyle, and fitness level.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Sustainable Results',
      description: 'Focus on long-term lifestyle changes that create lasting transformation.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Ongoing Support',
      description: '24/7 guidance and motivation to keep you accountable and on track.'
    }
  ];

  const certifications = [
    'NASM Certified Personal Trainer',
    'Precision Nutrition Level 1',
    'Functional Movement Screen (FMS)',
    'Corrective Exercise Specialist'
  ];

  const timeline = [
    {
      year: '2013',
      title: 'Started Fitness Journey',
      description: 'Began personal training career with local gym clients'
    },
    {
      year: '2016',
      title: 'Advanced Certifications',
      description: 'Obtained NASM and Precision Nutrition certifications'
    },
    {
      year: '2018',
      title: 'Online Coaching Launch',
      description: 'Transitioned to online coaching to reach more clients worldwide'
    },
    {
      year: '2020',
      title: 'Program Expansion',
      description: 'Developed specialized programs for busy professionals'
    },
    {
      year: '2023',
      title: '500+ Transformations',
      description: 'Achieved milestone of helping over 500 clients transform their lives'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Coach Andrei</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 10 years of experience in fitness coaching, I've dedicated my career 
            to helping busy professionals achieve their health and fitness goals through 
            sustainable, science-based approaches.
          </p>
        </div>

        {/* Detailed Bio */}
        <div className="mb-20">
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">My Story</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                My journey in fitness began over a decade ago when I realized that traditional 
                one-size-fits-all approaches simply don't work for busy professionals. Having 
                worked in corporate environments myself, I understand the unique challenges of 
                balancing career demands with personal health goals.
              </p>
              <p className="mb-4">
                This understanding led me to develop a coaching philosophy centered around 
                sustainable lifestyle integration. Rather than extreme measures that can't be 
                maintained long-term, I focus on creating realistic, achievable changes that 
                fit seamlessly into demanding schedules.
              </p>
              <p>
                Today, I'm proud to have helped over 500 clients worldwide achieve their 
                transformation goals while maintaining successful careers. My approach combines 
                evidence-based exercise science with practical lifestyle coaching, ensuring 
                every client receives a truly personalized experience.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">My Coaching Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="service-card text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card rounded-xl p-6 text-center shadow-md hover-lift">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">My Fitness Journey Timeline</h3>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="bg-card rounded-xl p-6 shadow-md ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <span className="text-primary font-bold">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;