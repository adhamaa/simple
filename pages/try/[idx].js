import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export default function Try({ idx }) {
  const { t } = useTranslation("second-page");

  return (
    <>
      <main>
        <Header heading={t("h1")} title={t("title")} />
        <Link href="/">
          <button type="button">{t("back-to-home")}</button>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { idx: "1" } }, { params: { idx: "2" } }] || [],
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params: { idx } }) => ({
  props: {
    idx,
    ...(await serverSideTranslations(locale, ["second-page", "footer"])),
  },
});
