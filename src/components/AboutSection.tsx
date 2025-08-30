import { Award, Heart, Target, Users, ChevronDown, ChevronUp, BookOpen, Trophy, Calendar, Globe } from 'lucide-react';
import { useState } from 'react';

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

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

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

        {/* Enhanced My Story Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl p-8 shadow-xl border border-primary/20 hover-lift">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Profile Image */}
              <div className="lg:w-1/3">
                <div className="relative group">
                  <img
                    src="/src/assets/ourstory.jpg"
                    alt="Coach Andrei"
                    className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-6 flex flex-col items-center justify-center space-y-1">
                  <h4 className="text-xl font-bold gradient-text mb-0">Coach Andrei</h4>
                  <p className="text-muted-foreground text-sm m-0">Fitness Coach & Transformation Specialist</p>
                </div>
              </div>

              {/* Story Content */}
              <div className="lg:w-2/3">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold gradient-text">My Journey</h3>
                  <button
                    onClick={toggleExpanded}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    {expanded ? (
                      <>
                        <ChevronUp className="w-5 h-5" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-5 h-5" />
                        Read Full Story
                      </>
                    )}
                  </button>
                </div>

                {/* Story Sections */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">
                        The Beginning
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        My journey in fitness began over a decade ago when I realized that traditional 
                        one-size-fits-all approaches simply don't work for busy professionals. Having 
                        worked in corporate environments myself, I understand the unique challenges of 
                        balancing career demands with personal health goals.
                      </p>
                    </div>
                  </div>

                  {expanded && (
                    <>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                          <Heart className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-foreground">
                            My Philosophy
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            This understanding led me to develop a coaching philosophy centered around 
                            sustainable lifestyle integration. Rather than extreme measures that can't be 
                            maintained long-term, I focus on creating realistic, achievable changes that 
                            fit seamlessly into demanding schedules.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-foreground">
                            The Impact
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Today, I'm proud to have helped over 500 clients worldwide achieve their 
                            transformation goals while maintaining successful careers. My approach combines 
                            evidence-based exercise science with practical lifestyle coaching, ensuring 
                            every client receives a truly personalized experience.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Key Achievements */}
                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="text-lg font-semibold mb-4 text-center gradient-text">
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="stats-card">
                      <Trophy className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">500+</div>
                      <p className="text-sm text-muted-foreground">Clients Transformed</p>
                    </div>
                    <div className="stats-card">
                      <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="stats-card">
                      <Globe className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">20+</div>
                      <p className="text-sm text-muted-foreground">Countries Served</p>
                    </div>
                    <div className="stats-card">
                      <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold gradient-text">4</div>
                      <p className="text-sm text-muted-foreground">Certifications</p>
                    </div>
                  </div>
                </div>
              </div>
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
                <img
                  src={`/src/assets/cert${index + 1}.png`}
                  alt={cert}
                  className="w-64 h-64 mx-auto mb-3 object-contain"
                />
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
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-md ml-2 sm:ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                    <span className="text-primary font-bold text-sm sm:text-base">{item.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
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