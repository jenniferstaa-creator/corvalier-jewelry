"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/i18n/i18n-provider";

type LocaleLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  const path = href.startsWith("/") ? href : `/${href}`;
  const localized =
    path === "/" ? `/${locale}` : `/${locale}${path}`;
  return <Link href={localized} {...props} />;
}
