// app/staff/page.tsx

import StaffBanner from "@/components/staff/StaffBanner";
import DoctorProfile from "@/components/staff/DoctorProfile";
import ProfessionalStaff from "@/components/staff/ProfessionalStaff";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

// ✅ Remove HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Types
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Staff() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "e6dbfc1e-40c5-40ec-a317-63e270149988",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  console.log("siteData", siteData);

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      <StaffBanner
        title={sections[0]?.title || ""}
        shortDescription={stripHtml(sections[0]?.shortDescription || "")}
        image={sections[0]?.image || ""}
      />

      <DoctorProfile section={sections[1]} />

      <ProfessionalStaff sections={sections} />
    </>
  );
}
