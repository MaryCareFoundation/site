import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2 } from "../typography";

export default function FAQSection() {
  const leftColumnQuestions = [
    {
      question: "Who can benefit from your foundation's services?",
      answer:
        "Our foundation's services are available to individuals and organizations committed to positive social change. This includes non-profit organizations, community groups, educational institutions, and grassroots initiatives working towards sustainable development and social improvement.",
    },
    {
      question: "Who can benefit from your foundation's services?",
      answer:
        "We support a wide range of beneficiaries including local communities, educational programs, healthcare initiatives, and environmental projects. Our services are designed to be inclusive and accessible to those who align with our mission of creating lasting social impact.",
    },
    {
      question: "Who can benefit from your foundation's services?",
      answer:
        "Any organization or individual working towards social good can benefit from our foundation's services. We particularly focus on projects that demonstrate potential for sustainable impact and community engagement.",
    },
  ];

  const rightColumnQuestions = [
    {
      question:
        "How does your foundation ensure impact in the communities you serve?",
      answer:
        "We maintain rigorous monitoring and evaluation processes to track the progress and outcomes of our initiatives. Regular assessments help us measure both quantitative and qualitative impacts in the communities we serve.",
    },
    {
      question:
        "How does your foundation ensure impact in the communities you serve?",
      answer:
        "Through close collaboration with local partners and stakeholders, we ensure our programs are tailored to meet specific community needs. We also implement feedback mechanisms to continuously improve our approach and maximize impact.",
    },
    {
      question:
        "How does your foundation ensure impact in the communities you serve?",
      answer:
        "Our foundation employs evidence-based approaches and maintains transparent reporting practices. We regularly conduct impact assessments and adjust our strategies based on community feedback and measured outcomes.",
    },
  ];

  return (
    <section className="mt-20 mb-32">
      <div className="container mx-auto">
        <TypographyH2 className="text-secondary font-semibold text-center mb-8">
          FAQs
        </TypographyH2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnQuestions.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnQuestions.map((item, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
