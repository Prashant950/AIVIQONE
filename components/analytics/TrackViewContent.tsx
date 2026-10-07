"use client";

import { useEffect, useRef } from "react";
import { trackViewContent } from "@/lib/fpixel";

interface TrackViewContentProps {
  contentName?: string;
  contentCategory?: string;
  params?: Record<string, any>;
}

export default function TrackViewContent({
  contentName,
  contentCategory,
  params = {},
}: TrackViewContentProps) {
  const hasFired = useRef(false);

  useEffect(() => {
    if (!hasFired.current) {
      hasFired.current = true;
      trackViewContent({
        content_name: contentName,
        content_category: contentCategory,
        ...params,
      });
    }
  }, [contentName, contentCategory, params]);

  return null;
}
