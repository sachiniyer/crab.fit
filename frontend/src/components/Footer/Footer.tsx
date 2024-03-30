import { headers } from "next/headers"

import Button from "/src/components/Button/Button"
import { useTranslation } from "/src/i18n/server"
import { makeClass } from "/src/utils"

import styles from "./Footer.module.scss"

interface FooterProps {
  isSmall?: boolean;
}

const Footer = async ({ isSmall }: FooterProps) => {
  const { t } = await useTranslation("common")
  const isRunningInApp = headers()
    .get("referer")
    ?.includes("android-app://fit.crab")

  return isRunningInApp ? null : ( // Cannot show external donation link in an Android app
    <footer
      id="donate" // Required to allow scrolling directly to the footer
      className={makeClass(styles.footer, isSmall && styles.small)}
    >
      <span>{"Made with Crab Fit"}</span>
      <Button
        isSmall
        title={t("donate.title")}
        href="https://github.com/GRA0007/crab.fit/"
        target="_blank"
        rel="noreferrer noopener payment"
        style={{ whiteSpace: "nowrap" }}
      >
        {"Repo"}
      </Button>
    </footer>
  )
}

export default Footer
