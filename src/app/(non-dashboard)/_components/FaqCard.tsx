import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export function FaqCard({
    question, 
    answer, 
    id
}: {
        question: string, 
        answer: string, 
        id: number
    }
) {
  return (
    <Accordion defaultValue={["plans"]}>
        <AccordionItem key={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
    </Accordion>      
  )
}
