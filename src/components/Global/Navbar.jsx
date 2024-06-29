import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import Navitems from "./Navitems";
import { Button } from "../ui/button";
import { ShoppingCart, SpaceIcon } from "lucide-react";
import Cart from "./Cart";

const Navbar = () => {
  const USER = null;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200 ">
            <div className="flex h-16 items-center">
              {/* logo */}
              <div className="ml-4 flex lg:ml-0">
                <Icons.logo className='h-10 w-10'/>
              </div>

              {/* navlinks */}
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-center">
<Navitems/>
              </div>

              {/* Button */}
              <div className="ml-auto flex items-center">
    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"> 
    {USER ? null:(<Button variant="ghost" >Sign in</Button>)}
    {USER?null:(<span className="h-6 w-px bg-gray-200"></span>)}
    {USER?null:(<Button variant="ghost">Create Account</Button>)}
    {USER?null:(<span className="h-6 w-px bg-gray-200"></span>)}
    {USER?null:(<div className="flex lg:ml-6 ">
      <span className="h-6 w-px bg-gray-200"></span>
      <div className="ml-4 flow-root">
        <Cart/>
      </div>
      </div>)}
     </div>
              </div>

            </div>
          </div>
          
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
