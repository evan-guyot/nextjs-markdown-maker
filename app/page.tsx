import Button from "@/app/components/ui/commons/button";
import Paragraph from "@/app/components/ui/commons/paragraph";
import Title from "@/app/components/ui/commons/title";

export default function Home() {
  return (
    <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32">
      <Title
        variant="h2"
        className="underline decoration-primary-400 dark:decoration-primary-700"
      >
        Markdown Maker
      </Title>
      <Paragraph className="mt-2">
        {" "}
        Generate Markdown files effortlessly with our lightning-fast tool.
        Download or copy the content instantly for free!
      </Paragraph>
      <Button variant="primary" className="mt-2">
        Make it now <span aria-hidden="true">→</span>
      </Button>
    </div>
  );
}
