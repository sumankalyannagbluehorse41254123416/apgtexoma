// app/resources/page.tsx

import ResorceBanner from "@/components/resorces/ResorceBanner";
import ResourcesSection from "@/components/resorces/ResourcesSection";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

const stripHtml = (html: string) =>
  html ? html.replace(/<[^>]*>/g, "") : "";

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

export default async function Resources() {

  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries(),
  );

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "7c2a35ca-b216-4a08-a078-3f4c53d44bb3",
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
      <ResorceBanner
        title={sections[0]?.title || ""}
        shortDescription={stripHtml(
          sections[0]?.shortDescription || "",
        )}
        image={sections[0]?.image || ""}
      />

     <ResourcesSection section={sections[1]} />
    </>
  );
}