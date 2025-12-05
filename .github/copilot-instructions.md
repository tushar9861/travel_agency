# AI Coding Agent Instructions

## Project Overview
**Darshan Bharat** is a Next.js 15 spiritual tourism website featuring pilgrimage package bookings (Char Dham Yatra, Prayagraj Magh Mela, etc.). The application is built with TypeScript, React, Tailwind CSS, and Radix UI components.

## Architecture & Data Flow

### Core Stack
- **Framework**: Next.js 15 (App Router) with TypeScript
- **UI**: Radix UI components + shadcn/ui library (`components/ui/`)
- **Styling**: Tailwind CSS with custom theme (dark mode support via `next-themes`)
- **Fonts**: Playfair Display (headers) + Poppins (body)
- **Icons**: lucide-react
- **Data Persistence**: Dual approach:
  - Browser: `localStorage` via `lib/data-store.ts` (client-side registration tracking)
  - Server: CSV files in `data/` directory via `lib/database.ts` (persistent backend storage)

### Page Structure
```
app/
├── layout.tsx          # Root layout with Navigation + Footer
├── page.tsx            # Homepage with hero, package carousel, registration form
├── book/               # Booking experience page
├── packages/           # Packages showcase
├── about/, contact/, faq/, gallery/, testimonials/  # Content pages
├── data-management/    # Admin dashboard for registrations
└── api/
    ├── initialize/     # Initializes CSV data files
    ├── get-registrations-data/
    ├── download-registrations/
    └── download-events/, download-trips/
```

### Registration Data Flow
1. **Client**: `RegistrationForm` (components/) → validates locally → calls `saveRegistration()` (lib/data-store.ts)
2. **Storage**: localStorage stores in-session data via `localStorage.setItem()`
3. **Export**: Data Management page reads from localStorage, exports to CSV via `downloadCSV()`
4. **Backend Option**: Can also call `addRegistration()` from `lib/database.ts` to write CSV directly

**Key files**: `lib/data-store.ts` (primary), `lib/database.ts` (secondary CSV approach), `components/registration-form.tsx`

## Development Workflows

### Build & Run
```bash
# Development (hot-reload on :3000)
pnpm dev

# Production build
pnpm build
pnpm start

# Linting
pnpm lint
```

### Data Initialization
- API route `GET /api/initialize` creates `data/registrations.csv`, `data/trips.csv`, `data/events.csv`
- Call this endpoint on first deployment to ensure data directory exists
- CSV headers: ID, Timestamp, Name, Email, Phone, Address, NumberOfPassengers, PackageInterest, Status

## Project-Specific Patterns

### Form Validation
Client-side validation is **dual-layer**:
1. **Inline validation** in RegistrationForm (email regex, 10-digit phone)
2. **Server validation** in `actions/submit-registration.ts` (revalidates all fields)
- Never skip server-side validation even if client validated

### Component Patterns
- All user-interactive components use `"use client"` directive
- Package data is hardcoded in `app/page.tsx` (array of objects with id, name, price, rating, etc.)
- Reusable UI components inherit from Radix UI + Tailwind (e.g., `<Button>`, `<Card>`, `<Input>`)
- Theme colors: Purple primary (`#C4186F`), gold accent (`#FFD700`), custom gradients

### Styling Conventions
- **Color theme**: Uses CSS variables in `app/globals.css` (e.g., `hsl(var(--primary))`)
- **Component elevation**: Use `card-elevated` class for shadow effects
- **Hover states**: Combine `hover:` utilities with transforms (e.g., `hover:-translate-y-3`)
- **Animations**: Motion/transitions via inline className and Framer Motion where needed

### Naming Conventions
- Components: PascalCase (`RegistrationForm`, `PackageCard`)
- API routes: kebab-case folders (`/api/get-registrations-data`)
- Files: kebab-case for pages/routes, PascalCase for components
- CSS classes: Lowercase with hyphens (`card-elevated`, `animate-pulse-golden`)

## Integration Points & Dependencies

### External Services
- **Unsplash images**: Used in package cards and hero sections
- **Vercel Analytics**: Imported in package.json (unused in visible code)

### Internal Cross-Component Communication
- **Navigation**: Links to all pages defined in `components/navigation.tsx` (sync changes here with app routes)
- **Data**: Registration data flows unidirectionally: Form → localStorage → Data Management page
- **Type definitions**: Use `interface` for component props and API responses (see `Registration` in data-store.ts)

### API Response Format
All routes return JSON with structure:
```typescript
{
  success: boolean,
  data?: any,
  error?: string,
  message?: string
}
```

## Key Developer Gotchas

1. **localStorage vs SSR**: Use `typeof window !== 'undefined'` checks when accessing localStorage in SSR contexts
2. **CSV escaping**: Phone/address fields must be quoted in CSV to handle special characters (already implemented in database.ts)
3. **Type safety**: `tsconfig.json` has `strict: true` — use proper types, avoid `any`
4. **Next.js 15 specifics**: Use App Router patterns; ignore Pages Router examples
5. **Radix UI composability**: Radix components expect specific prop structures; check ui/ folder examples before extending

## File Reference Map

| Purpose | Primary File |
|---------|-------------|
| Registration capture | `components/registration-form.tsx`, `lib/data-store.ts` |
| Data export/download | `lib/data-store.ts` → `downloadCSV()` |
| Admin view | `app/data-management/page.tsx` |
| Styling setup | `app/globals.css`, `tailwind.config.ts` |
| UI components | `components/ui/*` (use as-is) |
| Page navigation | `components/navigation.tsx` |
| Form server actions | `app/actions/submit-registration.ts` |

## When Adding Features

- **New page?** Create in `app/[feature]/page.tsx`, add route to `Navigation` links
- **New API endpoint?** Place in `app/api/[endpoint]/route.ts`, return consistent JSON format
- **New form?** Mirror RegistrationForm pattern: client-side validation + server action
- **New data type?** Add to both `lib/data-store.ts` (localStorage) and `lib/database.ts` (CSV)
- **New UI component?** Use Radix UI primitives from `components/ui/` as building blocks
