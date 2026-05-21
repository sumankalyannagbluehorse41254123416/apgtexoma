import Banner from "@/components/Banner";
import MissionStatement from "@/components/MissionStatement";
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
export default async function Home() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "ef481641-e306-4551-98e4-88aa817b9bfd",
    );
  } catch (error) {
    console.error("Fetch error:", error);
  }

  console.log("siteData", siteData);
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];
  const bannerSection = sections[0];
  const missionSection = sections[1];

  return (
    <>
      <Banner
        title={bannerSection?.title || ""}
        shortDescription={stripHtml(bannerSection?.shortDescription || "")}
        image={bannerSection?.image || ""}
      />
      <MissionStatement
        title={missionSection?.title || ""}
        shortDescription={stripHtml(missionSection?.shortDescription || "")}
      />
    </>
  );
}
