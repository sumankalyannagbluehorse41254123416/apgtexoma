// app/contact-us/page.tsx

import ContactBanner from "@/components/contact-us/ContactBanner";
import ContactSection from "@/components/contact-us/ContactSection";
import CareerOpportunities from "@/components/contact-us/CareerOpportunities";

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

export default async function ContactUsPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "561f4a6d-96b4-4f6a-8a33-516afeb54253",
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
      <ContactBanner
        title={sections[0]?.title || ""}
        shortDescription={stripHtml(sections[0]?.shortDescription || "")}
        image={sections[0]?.image || ""}
      />

      {/* ✅ array index 1 */}
      <ContactSection section={sections[1]} />

      <CareerOpportunities />
    </>
  );
}
