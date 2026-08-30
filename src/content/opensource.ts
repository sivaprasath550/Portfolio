export interface OpenSourceContribution {
  repo: string;
  stars: string;
  language: string;
  prNumber: string;
  prUrl: string;
  issueNumber: string;
  issueUrl: string;
  phases: {
    found: string;
    proved: string;
    shipped: string;
  };
  diff: {
    removed: string;
    added: string;
  };
}

export const supabaseContribution: OpenSourceContribution = {
  repo: "Supabase",
  stars: "35k+",
  language: "TypeScript",
  prNumber: "#48053",
  prUrl: "https://github.com/supabase/supabase/pull/48053",
  issueNumber: "#48052",
  issueUrl: "https://github.com/supabase/supabase/issues/48052",
  phases: {
    found:
      "Audited packages/pg-meta's query-builder type layer and found a latent interface/implementation mismatch — IQueryModifier.toSql declared zero arguments while the implementing class and two live call sites already passed an options object controlling CTE vs. final-query SQL generation.",
    proved:
      "Recognized it as the same bug class as a fix already accepted upstream in a sibling file, and filed an issue with exact file and line evidence before opening the PR.",
    shipped:
      "A provably backward-compatible fix — widening the parameter to optional preserves every existing call — verified with a clean tsc --noEmit typecheck and a full unit-suite pass.",
  },
  diff: {
    removed: "toSql(): string",
    added: "toSql(options?: QueryOptions): string",
  },
};
