# Matchpicks Part 4 — follow-up implementation prompt

Use in the **bootlegsportspicks** repo. Part 4 optimistic UI + WebSocket standings sync is largely implemented; this covers gaps, tests, blog alignment, and small optimizations.

---

## Context

**Implemented (do not redo):**

- `client/src/hooks/use-resilient-pick-mutation.ts` — `onMutate` cache optimism, per-`match_id` `AbortController`, snapshot rollback, stale `onSuccess` guard, full `onSettled` invalidations
- `client/src/lib/pick-cache-utils.ts` + tests
- `client/src/components/MatchCard.tsx` → `useResilientPickMutation`
- `useSubmitPick` deprecated wrapper in `use-league-queries.ts`
- `server/services/infra/realtime-broadcast-service.ts` + attach on `/ws`
- `StandingService` → `broadcastStandingsRecalculated` after `recalculatePickingLeagueRanks`
- `client/src/hooks/use-standings-sync.ts` on **league** surfaces only (see below)
- Hook tests: `use-resilient-pick-mutation.test.tsx`, `use-standings-sync.test.tsx`, server broadcast tests

**`useStandingsSync` placement (intentional):**

- Wired: `picks-page.tsx`, `PicksView.tsx`, `StandingsView.tsx`
- **Not** wired: `my-picks-page.tsx` — that page is picks-only, no standings tab; do **not** add WS there unless the product adds a standings section

---

## Task 1 — Align blog Part 4 with code (itsnothing repo)

File: `content/post/state-vs-network-resilient-optimistic-ui-under-eventual-consistency.md`

Rewrite in **past tense** to match production:

1. Remove “What the codebase does today” (old `MatchCard` + `useSubmitPick` only on success).
2. Remove “I am moving…” / future WebSocket wording.
3. Document real implementation:
   - `useResilientPickMutation` + `mergePickIntoList` + per-match abort map (not only TanStack `{ signal }` in `mutationFn`)
   - `onSuccess` controller guard for stale responses
   - `onSettled` invalidates picks, standings, dashboard, consensus, achievements
   - `MatchCard` keeps `selectedTeamId` + local consensus; cache is canonical
   - WebSocket: `RealtimeBroadcastService`, `STANDINGS_RECALCULATED`, `useStandingsSync`, `VITE_WS_URL`
4. Note broadcast runs after regular-season rank recalc (playoff/achievement work may still be in flight).
5. Mention hook-level tests; offline queue still backlog.
6. Standings sync scope: league picks/standings views only, not `my-picks-page`.

Rebuild Hugo `docs/` after edit.

---

## Task 2 — `MatchCard` integration test (rapid clicks)

**File:** `client/src/components/MatchCard.test.tsx` (extend existing suite)

**Goal:** Complement `use-resilient-pick-mutation.test.tsx` with UI-level proof.

**Cases:**

1. **Rapid A → B:** Mock `useResilientPickMutation` or `apiRequest` with delayed first response; click away team then home team; assert final `selectedTeamId` and picked styling match B after both settle.
2. **Server error:** Assert selection reverts to `userPick` and destructive toast (hook or card level—avoid duplicate toast assertions if both fire).
3. **Aborted prior request:** Second click while first in flight; no error toast from abort.

Use existing `test-utils.tsx` QueryClient defaults (`retry: false`). Prefer MSW or vi.mock on `@/hooks/use-resilient-pick-mutation` returning a controllable mutate spy.

---

## Task 3 — WebSocket / standings optimizations

1. **Broadcast timing:** After `updatePlayoffStandings` completes (or once per `executeMatchResolved` batch per league), emit a **single** `STANDINGS_RECALCULATED` so clients do not refresh while playoff rows are still stale. Option: move `broadcastStandingsRecalculated` to end of per-league loop iteration.

2. **Season in client:** `useStandingsSync` already invalidates `message.season` from payload—add test that wrong season in message does not clear wrong cache.

3. **Auth (optional):** Document that `/ws?leagueId=` is league-scoped public hint only; if hardening, require session cookie on upgrade without breaking local dev.

4. **Env docs:** Add `VITE_WS_URL` to `.env.example` (e.g. `ws://localhost:5000/ws` for dev).

---

## Task 4 — Pick mutation edge cases

1. **Concurrent picks on different matches:** Confirm per-match `abortByMatchRef` map does not abort pick B when user picks match 200 then match 201—add test if missing.

2. **`userId` undefined:** `useResilientPickMutation(undefined)` should not throw on render; mutate should fail gracefully (document or guard).

3. **MatchCard `onError` vs hook `onError`:** On abort, hook skips toast; card still runs `setSelectedTeamId(userPick?.picked_team_id ?? null)`—verify rapid B click does not flash back to A from card callback when cache already shows B.

---

## Task 5 — E2E (optional, high value)

Playwright: open league picks tab, click team A, immediately team B, wait for network idle, assert picked state persists as B. Run against `npm run test:e2e` with test DB.

---

## Task 6 — Article series / portfolio (itsnothing)

CSS already targets series box spacing; no code change in Matchpicks unless linking from app.

---

## Acceptance criteria

- [ ] Part 4 blog describes shipped code accurately (no “planned” resilient hook / WebSocket).
- [ ] `MatchCard.test.tsx` covers rapid-click race at UI layer.
- [ ] Standings broadcast after full per-league standings work (or documented trade-off).
- [ ] Per-match abort does not cancel other matches (test).
- [ ] `my-picks-page` unchanged unless product adds standings UI.
- [ ] All client/server tests pass: `npm run test:client:run`, `npm run test:server:run`

---

## Out of scope

- `persistQueryClient` / offline IndexedDB queue
- `my-picks-page` WebSocket (no standings on that page)
