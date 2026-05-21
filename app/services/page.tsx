import ServiceBanner from "@/components/services/ServiceBanner";

import NeuropsychologicalContent from "@/components/services/NeuropsychologicalContent";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";
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
export default async function Services() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "6a4ee05d-46f7-43a5-b165-703a4f41c65c",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  console.log("siteData", siteData);

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];
  const serviceSection = sections[0];
  return (
    <>
      <ServiceBanner
        title={serviceSection?.title || ""}
        shortDescription={stripHtml(serviceSection?.shortDescription || "")}
        image={serviceSection?.image || ""}
      />
   <NeuropsychologicalContent sections={sections} />
    </>
  );
}
