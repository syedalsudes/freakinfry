
import CategoriesBar from "@/components/CategoriesBar";
import DealsSection from "@/components/DealsSection";
import ProductMenu from "@/components/HomePage";
import MenuSection from "@/components/MenuItems";


export default function Home() {

  
  
  return (
    <>
      <ProductMenu />

      <CategoriesBar />

      <DealsSection />
      <MenuSection />
    </>
  );
}
