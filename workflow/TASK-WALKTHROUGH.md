# Task walkthrough — understanding before appearance

Define 3–5 concrete tasks from the active brief before sample refinement. State the start, goal, expected visible result and the screens/states needed. Avoid hints such as naming the button the participant is meant to discover.

Examples to adapt, not dashboard-only requirements: identify the main adverse change; compare two options; locate and inspect a record; change a parameter and understand its effect; recover from an empty result/error. A shop may use product selection and cart correction; a service may use booking and rescheduling.

## Designer and reviewer walkthrough
Follow the designed path from the start using the visible labels, hierarchy and states. At each step record: what the user must notice, the action available, the resulting state and any uncertainty. Verify global/local filter context, back/cancel routes and preservation of entered content where relevant. A link target existing in JSON proves only structure. If playback is unavailable, use the static sequence and explicitly label the result “expert static walkthrough”; do not call it interactive usability testing.

Reviewers should receive task statements and starting screens without the author's solution path. Let them infer the route, then compare their findings with the intended outcome. Model success does not establish human usability.

## Human observation, when available
Offer a short participant session at a review checkpoint without requiring the user to perform one before any progress. Observe hesitation, wrong turns, misunderstood labels and whether the goal is reached. Ask neutral follow-ups. Record participant count and actual observations; do not invent users, timing, success rates or human-test claims. No participant means human validation is unperformed, not failed or passed.

## Record and finish
Keep task records in docs/VALIDATION.md, separate from visual scores. For each task distinguish designed coverage, expert static inspection, prototype playback and human observation. Fix concrete ambiguities and rewalk affected routes. Missing core states or broken designed paths must be resolved or marked incomplete. Runtime keyboard, screen-reader, persistence, arbitrary filtering and responsive behavior remain implementation-stage checks unless actually exercised in a suitable environment. Stay inside the current design-only scope.
