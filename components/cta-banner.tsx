import { Button } from "./ui/button";

export default function CTABanner() {
  return (
    <section className="bg-background text-white py-16 px-4 rounded-t-[25px] min-h-[600px] md:min-h-[500px] bg-[url('/bg-small.svg')] relative border-t flex items-center justify-center">
      <div className=" mx-auto text-center flex items-center justify-center w-full absolute z-20 pt-10">
        <div className="container mx-auto">
          <h2 className="title mb-6">
            Ready to Improve Your Business Productive?
          </h2>
          <p className="text-muted-foreground mb-8 mx-auto">
            Take the first step towards digital success with Int+ by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a robust enterprise solution, we&apos;ve got you covered. Let&apos;s embark on this transformative journey together.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
            <Button className="w-fit" size="lg" >
              Book Free Consultation
            </Button>
            <Button className="w-fit" size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-background/50 via-background to-background h-full w-full absolute top-0 left-0 z-0" />
    </section>
  )
}

