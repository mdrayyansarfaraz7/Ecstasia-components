import Bottom from "@/components/Bottom";
import CountdownTimer from "@/components/CountdownTimer";
import Navbar from "@/components/Navbar";
import SplashCursor from "@/components/ui/SplashCursor";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <>
    <div className="relative h-auto bg-[url('https://utfs.io/f/e8534695-ca58-4b0e-9127-736a235f6c66-8l821b.png')] bg-cover bg-center">
    <SplashCursor/>
    <Navbar/>

      {/* Event Banner */}
      <div className="flex justify-center items-center pt-10 sm:pt-12 md:pt-16 lg:pt-20">
        <img 
          src="https://utfs.io/f/56503bbd-5d02-4505-b451-a4726549be7a-7dlf2n.png" 
          alt="Event Banner" 
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[70%]"
        />
      </div>

      {/* Powered By Section */}
      <div className="flex gap-2 justify-center items-center mt-2 sm:mt-4  md:mt-8">
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-abhaya">Powered By</p>
        <img src="https://utfs.io/f/662a59cc-646a-480c-bd90-d88140d75c34-3am298.png" alt="UEM" className="w-16 sm:w-24 md:w-28 lg:w-42" />
      </div>
      <CountdownTimer/>
    </div>
    <Bottom/>
    </>
  );
}