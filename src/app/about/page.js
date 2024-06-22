import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Profile() {
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top relative">
        <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <About />
        <Footer />
      </div>
    </>
  );
}
