import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import ProductReels from "../ui/ProductReels";

const perks =[
  {
    name: 'Instant Delevery',
    Icon : ArrowDownToLine,
    description: 'Get your assets delevery to your email in seconds  and download them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon : CheckCircle,
    description: 'Every asset Of our platform is verify by our team to ensure our highest quality standards. Not happy? We offer 30-day refund gurantee.',
  },
  {
    name: 'For the Planet',
    Icon : Leaf,
    description: 'We have pledged 1% of sales to the preservation and restoring of the natural environment.',
  }
]

const Home = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high quality
            <span className="text-blue-600">Digital Assets</span>{" "}
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to digital hippo. Every assets on our platform is varified by our team to ensure  our hightest quality standards</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
           <Button variant="default">Browse Product</Button>
           <Button variant="ghost">Our  Quality Promises &rarr;</Button>
          </div>
        </div>
        <ProductReels/>
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-100">
        <MaxWidthWrapper className='py-20' >
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">

          {
            perks.map((perk)=>(
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className='w-1/3 h-1/3'/>}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>

                </div>
                 </div>
            ))
          }
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Home;
