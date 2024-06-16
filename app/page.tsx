import Button from "@/app/components/ui/commons/button";
import Paragraph from "@/app/components/ui/commons/paragraph";
import Title from "@/app/components/ui/commons/title";

export default function Home() {
  return (
    <div className="bg-white h-svh">
      <div className="relative h-full isolate overflow-hidden bg-gray-100 dark:bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
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
      </div>
    </div>
  );
}
