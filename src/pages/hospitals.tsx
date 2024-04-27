import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/interfaces/layout";
import dynamic from "next/dynamic";

const DynamicHomeTestimonial = dynamic(
  () => import("../components/home/testimonial")
);
const DynamicHomeOurHospitals = dynamic(
  () => import("../components/hospitals/hospitalPages")
);
const DynamicHomeNewsLetter = dynamic(
  () => import("../components/home/newsletter")
);

const Home: NextPageWithLayout = () => {
  return (
    <>

      <DynamicHomeOurHospitals />
      <DynamicHomeTestimonial/>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
