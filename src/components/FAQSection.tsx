import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does online coaching work?",
      answer: "Online coaching includes personalized workout plans delivered through a user-friendly app, weekly check-ins via video calls or messaging, form reviews through video submissions, and ongoing support. You'll have direct access to me for questions and guidance throughout your journey."
    },
    {
      question: "What equipment do I need for the workouts?",
      answer: "Programs are designed to be flexible based on your available equipment. I can create routines for home workouts with minimal equipment (resistance bands, dumbbells) or full gym access. During our initial consultation, we'll discuss your setup and preferences."
    },
    {
      question: "How often do we check in?",
      answer: "For 1:1 coaching, we have weekly check-ins where we review your progress, adjust your program as needed, and address any concerns. You also have ongoing access to message me with questions between sessions. Group program participants have weekly group calls."
    },
    {
      question: "Can you help with nutrition if I have dietary restrictions?",
      answer: "Absolutely! I work with various dietary preferences and restrictions including vegetarian, vegan, gluten-free, and others. During our consultation, we'll discuss your specific needs and create a nutrition plan that works for your lifestyle and goals."
    },
    {
      question: "What if I'm a complete beginner?",
      answer: "Perfect! I specialize in working with people at all fitness levels. We'll start with a thorough assessment of your current fitness level and gradually build up intensity. My programs are designed to be progressive and safe for beginners while still being challenging."
    },
    {
      question: "How long before I see results?",
      answer: "Most clients start feeling stronger and more energetic within 2-3 weeks. Visible physical changes typically begin around 4-6 weeks, with significant transformations usually seen at the 12-week mark. Remember, lasting change takes time and consistency."
    },
    {
      question: "What's included in the nutrition plans?",
      answer: "Nutrition plans include customized meal plans based on your preferences and goals, macro calculations, portion guidelines, grocery shopping lists, meal prep strategies, and access to a recipe database. I also provide guidance on supplements when appropriate."
    },
    {
      question: "Can I cancel or change my program?",
      answer: "Yes, you can modify or cancel your program with 30 days notice. I understand that life circumstances can change, and I'm committed to working with you to find solutions that fit your needs. We can always adjust the approach or intensity as needed."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most common questions about my coaching programs and approach.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-card rounded-xl px-6 shadow-md border-0"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? I'm here to help!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-hero-primary"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;