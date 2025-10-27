# House Rental App - AI Coding Instructions

## Project Architecture

This is a React + TypeScript + Vite house rental listing application with a **mock API system** that simulates a backend using localStorage. Key architectural decisions:

- **Mock API**: Uses `axios-mock-adapter` to intercept HTTP requests and return mock data stored in localStorage
- **Frontend-Only**: No real backend - all data persistence happens in browser localStorage via `src/lib/utils/localStorage.ts`
- **Modern React**: Uses React 19 with TypeScript in strict mode
- **Build System**: Rolldown-based Vite instead of standard Vite for better performance

## Critical Development Patterns

### Mock API System (Most Important)

- **Entry Point**: `src/api/index.ts` - Creates axios instance with MockAdapter
- **Database Simulation**: localStorage acts as database, accessed via `src/api/helpers.ts` utilities
- **Data Layer**: `src/api/data/` contains mock entities (listings, users, locations, reviews)
- **Authentication**: JWT tokens with 15min access/30day refresh cycle using `jose` library
- **Auth Toggle**: Set `env.USE_AUTH = false` to disable authentication during development

### Key API Patterns

```typescript
// All API functions follow this pattern:
export const getListings = (params = {}) => {
  const listings = getDatabaseTable("listings"); // Get from localStorage
  // Filter/transform data
  return filteredListings;
};

// Mock adapter setup:
adapter.onGet("/api/listings").reply(
  withAuth(async (config) => {
    // Optional auth wrapper
    // Handle request, return [statusCode, data]
  })
);
```

### Data Seeding

- Run `seedLocalDatabase()` from `src/api/data/seed.ts` to populate initial data
- Database structure: `{ listings, locations, users, reviews }` stored under `env.DB_KEY`
- Demo credentials: `demo@cosdensolutions.io` / `cosdensolutions`

## Development Workflow

### Setup & Run

```bash
pnpm install        # Install dependencies
pnpm dev           # Start dev server (Vite)
pnpm build         # TypeScript compile + build
pnpm lint          # ESLint check
```

### Key Dependencies

- **UI**: Tailwind CSS v4 with shadcn/ui setup (`components.json` configured)
- **Dates**: `date-fns` for all date operations (see availability filtering in listings)
- **Icons**: `lucide-react` for consistent icon system
- **Styling**: `clsx` + `tailwind-merge` via `cn()` utility in `src/lib/utils.ts`

### TypeScript Configuration

- **Path Mapping**: `@/*` maps to `src/*` (configured in `tsconfig.json`)
- **Strict Mode**: All strict TypeScript checks enabled
- **Build**: Dual tsconfig setup (`tsconfig.app.json` + `tsconfig.node.json`)

## Component & File Conventions

### File Organization

```
src/
  api/              # Mock API layer
    data/           # Entity data & factories
    helpers.ts      # DB utilities, auth helpers
    index.ts        # Main mock adapter setup
  lib/
    utils/          # Utility functions
    env.ts          # Environment configuration
```

### Naming Patterns

- **API Functions**: `getEntityById`, `getEntities`, `createEntity`
- **Data Factories**: `createListing()`, `createUser()` etc. in data files
- **Date Handling**: Use `date-fns` functions, especially `startOfDay()` for availability

### Environment Variables

Modify `src/lib/env.ts` for configuration:

- `USE_AUTH`: Toggle authentication on/off
- `DB_KEY`: LocalStorage key for mock database
- `BASE_URL`: API base URL (currently unused due to mocking)

## Common Debugging Tips

### Mock API Issues

- Check browser localStorage for database state under key from `env.DB_KEY`
- Use browser Network tab - all requests should show as fulfilled by mock adapter
- Enable auth debugging by setting `env.USE_AUTH = false` temporarily

### Build Issues

- Uses `rolldown-vite@7.1.14` instead of standard Vite (see package.json overrides)
- Path resolution depends on `@/*` alias - always use absolute imports from `src/`

### Data Relationships

- Listings reference `locationId` and `userId`
- Reviews reference `listingId` and `userId`
- Use appropriate getter functions (`getLocationById`, etc.) to join data

## Integration Points

### Authentication Flow

1. Login via `/api/signin` → gets refresh token in cookie + access token
2. Subsequent requests use `Authorization: Bearer <token>` header
3. `withAuth()` wrapper validates tokens on protected endpoints
4. Token refresh via `/api/refreshToken` endpoint

### Listing Filtering

- Date availability check via `isListingAvailable()` in `src/api/data/listings.ts`
- Guest capacity filtering in `getListings()`
- Search by name (case-insensitive) in listing queries

When working on this codebase, always consider the mock API system first - most "backend" changes happen in the `src/api/` directory structure.
