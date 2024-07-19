import { config } from "@keystatic/core";
import {
  heroSection,
  ctaSection,
  overViewSection,
  briefTestimonialSection,
  reviewSection,
} from "@/singletons";

export default config({
  storage: {
    kind: "local",
    // repo: "Nombiembre/zap-keystatic",
  },
  singletons: {
    hero: heroSection,
    cta: ctaSection,
    overView: overViewSection,
    briefTestimonial: briefTestimonialSection,
    review: reviewSection,
  },
});
