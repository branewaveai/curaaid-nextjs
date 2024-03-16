import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/interfaces/layout";
import dynamic from "next/dynamic";
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import("../components/home/hero"));
const DynamicHomeFeature = dynamic(() => import("../components/home/feature"));
const DynamicHomePopularDoctors = dynamic(
  () => import("../components/home/expert-doctors")
);
const DynamicHomeTestimonial = dynamic(
  () => import("../components/home/testimonial")
);
const DynamicHomeOurHospitals = dynamic(
  () => import("../components/home/hospitals")
);
const DynamicHomeTreatment = dynamic(
  () => import("../components/home/treatment")
);
const DynamicHomeNewsLetter = dynamic(
  () => import("../components/home/newsletter")
);

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeTestimonial/>
      <DynamicHomeOurHospitals />
      <DynamicHomePopularDoctors />
      <DynamicHomeTreatment />
      
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
