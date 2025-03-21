import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TypographyH2 } from "../typography";

export default function FAQSection() {
  const questions = [
    {
      id: "q1",
      question: "What is Mary Care Foundation (MCF)?",
      answer:
        "Mary Care Foundation (MCF) is a non-governmental organization (NGO) established in 2019 to support mothers in emergency childbirth and postpartum cases. We provide healthcare support, medical supplies, and empowerment programs for young girls. <a href='/about' className='text-blue-500 underline'>Learn more about us</a>.",
    },
    {
      id: "q2",
      question: "What is the registration number of Mary Care Foundation?",
      answer:
        "MCF is registered under the Corporate Affairs Commission (CAC) with registration number 184127.",
    },
    {
      id: "q3",
      question: "What are the main focus areas of MCF?",
      answer:
        "Our work focuses on: <br>" +
        "• Maternal and Child Health (MCH): Providing emergency healthcare, drugs, and consumables for pregnant women and newborns. <br>" +
        "• Healthcare Professional Training: Enhancing the capacity of healthcare workers. <br>" +
        "• Young Girls' Empowerment: Providing scholarships, skills training, and mentorship for marginalized girls. <br>" +
        "• Research & Collaboration: Partnering with researchers to improve maternal and child health. <a href='/programs' className='text-blue-500 underline'>Explore our programs</a>.",
    },
    {
      id: "q4",
      question: "Where does MCF operate?",
      answer:
        "MCF is based in Osun State, Nigeria, and supports hospitals such as Obafemi Awolowo University Teaching Hospitals Complex (OAUTHC), Ile-Ife, and Wesley Guild Hospital, Ilesa.",
    },
    {
      id: "q5",
      question: "How does MCF support mothers during childbirth?",
      answer:
        "We provide immediate medical assistance, emergency drugs, and consumables for mothers in critical conditions. We also donate emergency cesarean section packs to hospitals and clinics to aid safe deliveries.",
    },
    {
      id: "q6",
      question:
        "Who is eligible to receive MCF’s maternal and child health support?",
      answer:
        "Pregnant women and mothers who are registered under the foundation and in dire need of medical assistance are eligible. Support is also extended to hospitals’ maternal and pediatric wards.",
    },
    {
      id: "q7",
      question: "How does MCF collaborate with hospitals and clinics?",
      answer:
        "MCF partners with hospitals by donating medical supplies, providing emergency care, and supporting healthcare workers through training programs to enhance maternal and pediatric care.",
    },
    {
      id: "q8",
      question: "Can individuals request assistance from MCF?",
      answer:
        "Yes. Pregnant women or families in need can contact us directly or through partner hospitals to inquire about assistance. <a href='/contact' className='text-blue-500 underline'>Contact us here</a>.",
    },
    {
      id: "q9",
      question: "How does MCF empower young girls?",
      answer:
        "We provide: <br>" +
        "• Educational support & scholarships for marginalized girls. <br>" +
        "• Skills acquisition training to help young women become self-sufficient. <br>" +
        "• Capacity-building programs to boost confidence and leadership skills.",
    },
    {
      id: "q10",
      question:
        "Who can apply for MCF’s scholarship and skills training programs?",
      answer:
        "Young girls from low-income or disadvantaged backgrounds who need financial or skill-based support are eligible. Applications are reviewed based on merit and needs.",
    },
    {
      id: "q11",
      question: "How can I apply for MCF’s scholarship or training programs?",
      answer:
        "Applications can be submitted through our website or via email. We announce application openings on our social media platforms and through partner organizations. <a href='/apply' className='text-blue-500 underline'>Apply here</a>.",
    },
    {
      id: "q12",
      question: "What kind of training does MCF offer to healthcare workers?",
      answer:
        "We provide capacity-building programs on emergency maternal care, neonatal care, and best global practices for maternal and child health (MCH).",
    },
    {
      id: "q13",
      question: "Who can participate in MCF’s healthcare training programs?",
      answer:
        "Doctors, nurses, midwives, and other healthcare professionals working in maternal and child health services can apply for our training sessions.",
    },
    {
      id: "q14",
      question: "How does MCF collaborate with researchers?",
      answer:
        "MCF partners with researchers and specialists to enhance maternal and child health studies. We aim to improve research capabilities in local communities and drive evidence-based healthcare solutions. <a href='/research' className='text-blue-500 underline'>Learn more about our research</a>.",
    },
    {
      id: "q15",
      question: "Can I volunteer with MCF?",
      answer:
        "Yes! We welcome medical and non-medical volunteers to support our programs. Volunteers can assist in healthcare outreach, training, fundraising, and administration.",
    },
    {
      id: "q16",
      question: "How can I partner with MCF?",
      answer:
        "We collaborate with individuals, organizations, and hospitals that share our mission. If you’re interested in partnering, please contact us via email or phone. <a href='/partner' className='text-blue-500 underline'>Partner with us</a>.",
    },
    {
      id: "q17",
      question: "How can I donate to MCF?",
      answer:
        "You can donate via bank transfer, online payment, or in-kind contributions (e.g., medical supplies, educational materials). Details are available on our website. <a href='/donate' className='text-blue-500 underline'>Donate here</a>.",
    },
    {
      id: "q18",
      question: "Are donations to MCF tax-deductible?",
      answer:
        "Yes, MCF is a registered NGO, and donations may qualify for tax deductions depending on your location. Contact us for details.",
    },
    {
      id: "q19",
      question: "Can I sponsor a specific program or hospital?",
      answer:
        "Yes! Donors can choose to sponsor a maternal health program, a hospital’s labor ward, or a young girl’s education/training.",
    },
    {
      id: "q20",
      question: "How can I contact Mary Care Foundation?",
      answer:
        "You can reach us through: <a href='/contact' className='text-blue-500 underline'>Contact us here</a>.",
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
            {questions.slice(0, 3).map((item) => (
              <Accordion key={item.id} type="single" collapsible>
                <AccordionItem value={item.id}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {questions.slice(3,6).map((item) => (
              <Accordion key={item.id} type="single" collapsible>
                <AccordionItem value={item.id}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
