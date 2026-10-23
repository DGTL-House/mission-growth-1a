// Eligibility quiz content + mapping to the booking widget's query params.
// Ported from the `nonprofit` landing (quiz branch: EligibilityQuiz.jsx +
// utils/quizParams.js). Question 1 uses the option labels from the Figma
// layout; the rest are unchanged.
//
// ⚠️ GoHighLevel only records a value that matches the custom-field option
// exactly — note org_size uses plain hyphens (-), not the en-dashes (–) shown
// in the quiz labels. Anything unmatched is silently dropped.

export interface Question {
  id: string;
  param: string;
  question: string;
  note?: string;
  // [label shown in the quiz, value sent to GHL]
  options: [string, string][];
}

export const STATUS_QUESTION_ID = "nonprofit_status";
export const STATUS_ELIGIBLE = "Yes";

export const QUESTIONS: Question[] = [
  {
    id: "grant_status",
    param: "grant_status",
    question: "Do you currently have a Google Ad Grant?",
    options: [
      ["No, not yet", "Not yet"],
      ["We applied and Google rejected us", "Applied — rejected"],
      ["Yes, but it is not delivering much", "Active grant"],
    ],
  },
  {
    id: "marketing_owner",
    param: "marketing_owner",
    question: "Who handles marketing at your organization?",
    options: [
      ["Me — I'm the founder/director", "Founder/director"],
      ["We have a marketing person or team", "Marketing person or team"],
      ["A volunteer or part-time helper", "Volunteer or part-time"],
      ["No one right now", "No one"],
    ],
  },
  {
    id: "team_size",
    param: "org_size",
    question: "How many people work at your organization?",
    options: [
      ["Just me / 1–2 people", "1-2"],
      ["3–10", "3-10"],
      ["11–50", "11-50"],
      ["51–200", "51-200"],
      ["200+", "200+"],
    ],
  },
  {
    id: "priority",
    param: "primary_goal",
    question: "What matters most to your nonprofit right now?",
    options: [
      ["More donations", "Donations"],
      ["More volunteers", "Volunteers"],
      ["Awareness for our cause", "Awareness"],
      ["Program sign-ups / service reach", "Program sign-ups"],
      ["Other", "Other"],
    ],
  },
  {
    id: "mission",
    param: "mission_focus",
    question: "What's your mission focus?",
    options: [
      ["Education & Youth", "Education & Youth"],
      ["Health & Medical", "Health & Medical"],
      ["Human Services", "Human Services"],
      ["Rights & Advocacy", "Rights & Advocacy"],
      ["Animals & Environment", "Animals & Environment"],
      ["Culture & Community", "Culture & Community"],
      ["Other", "Other"],
    ],
  },
  {
    id: STATUS_QUESTION_ID,
    param: "eligibility",
    question: "Does your organization have valid 501(c)(3) status?",
    note: "501(c)(3) is required by Google for this program.",
    options: [
      [STATUS_ELIGIBLE, "Eligible"],
      ["No", "Not yet — no 501c3"],
    ],
  },
];

/** Return `url` with the mapped quiz answers appended as query params. */
export function appendBookingParams(
  url: string,
  answers: Record<string, string>,
): string {
  try {
    const u = new URL(url);
    for (const q of QUESTIONS) {
      const value = q.options.find(([label]) => label === answers[q.id])?.[1];
      if (value != null) u.searchParams.set(q.param, value);
    }
    return u.toString();
  } catch {
    return url;
  }
}
