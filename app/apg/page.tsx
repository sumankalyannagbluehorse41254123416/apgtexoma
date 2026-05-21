// app/apg/page.tsx

import HeroBanner from "@/components/apg/HeroBanner";
import MissionStatement from "@/components/apg/MissionStatement";
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

export default async function APG() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "9c470773-27f9-4ec1-838b-772ab633fcf5",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  console.log("siteData", siteData);

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ✅ array index 0
  const heroSection = sections[0];
  const missionSection = sections[1];
  return (
    <>
      <HeroBanner
        title={heroSection?.title || ""}
        shortDescription={stripHtml(heroSection?.shortDescription || "")}
        image={heroSection?.image || ""}
      />

      <MissionStatement
        title={missionSection?.title || ""}
        shortDescription={stripHtml(missionSection?.shortDescription || "")}
      />
    </>
  );
}
