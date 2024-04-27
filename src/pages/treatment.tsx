import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/interfaces/layout";
import dynamic from "next/dynamic";

const DynamicHomeTestimonial = dynamic(
  () => import("../components/home/testimonial")
);
const DynamicHomeOurHospitals = dynamic(
  () => import("../components/hospitals/hospitalPages")
);
const DynamicHomeTreatments = dynamic(
  () => import("../components/treatments/treatment1")
);

const Home: NextPageWithLayout = () => {
  return (
    <>

      <DynamicHomeTreatments />
      <DynamicHomeTestimonial/>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
