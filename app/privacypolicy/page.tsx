// app/privacy-policy/page.tsx

import PrivacyPolicyContaintPage from "@/components/privacypolicy/PrivacyPolicyContaintPage";
import PrivacyBanner from "@/components/privacypolicy/PrivacyBanner";

import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

// ✅ Remove HTML tags
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

export default async function PrivacyPolicyPage() {

  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries(),
  );

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      { host, ...headersObj },
      "98d23d83-3b00-48f3-b81f-84babec90972",
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
      <PrivacyBanner
        title={sections[0]?.title || ""}
        shortDescription={stripHtml(
          sections[0]?.shortDescription || "",
        )}
        image={sections[0]?.image || ""}
      />

      <PrivacyPolicyContaintPage />
    </>
  );
}