# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Talkterview" is a smart AI-powered interview assistant service that helps users practice and improve their interview skills through personalized AI conversations.

## Using Gemini CLI for Large Codebase Analysis

When analyzing large codebases or multiple files that might exceed context limits, use the Gemini CLI with its massive
context window. Use `gemini -p` to leverage Google Gemini's large context capacity.

## File and Directory Inclusion Syntax

Use the `@` syntax to include files and directories in your Gemini prompts. The paths should be relative to WHERE you run the
gemini command:

### Examples:

**Single file analysis:**
gemini -p "@src/main.py Explain this file's purpose and structure"

Multiple files:
gemini -p "@package.json @src/index.js Analyze the dependencies used in the code"

Entire directory:
gemini -p "@src/ Summarize the architecture of this codebase"

Multiple directories:
gemini -p "@src/ @tests/ Analyze test coverage for the source code"

Current directory and subdirectories:
gemini -p "@./ Give me an overview of this entire project"

## Or use --all_files flag:

gemini --all_files -p "Analyze the project structure and dependencies"

Implementation Verification Examples

Check if a feature is implemented:
gemini -p "@src/ @lib/ Has dark mode been implemented in this codebase? Show me the relevant files and functions"

Verify authentication implementation:
gemini -p "@src/ @middleware/ Is JWT authentication implemented? List all auth-related endpoints and middleware"

Check for specific patterns:
gemini -p "@src/ Are there any React hooks that handle WebSocket connections? List them with file paths"

Verify error handling:
gemini -p "@src/ @api/ Is proper error handling implemented for all API endpoints? Show examples of try-catch blocks"

Check for rate limiting:
gemini -p "@backend/ @middleware/ Is rate limiting implemented for the API? Show the implementation details"

Verify caching strategy:
gemini -p "@src/ @lib/ @services/ Is Redis caching implemented? List all cache-related functions and their usage"

Check for specific security measures:
gemini -p "@src/ @api/ Are SQL injection protections implemented? Show how user inputs are sanitized"

Verify test coverage for features:
gemini -p "@src/payment/ @tests/ Is the payment processing module fully tested? List all test cases"

## Use gemini -p when:

- Analyzing entire codebases or large directories
- Comparing multiple large files
- Need to understand project-wide patterns or architecture
- Current context window is insufficient for the task
- Working with files totaling more than 100KB
- Verifying if specific features, patterns, or security measures are implemented
- Checking for the presence of certain coding patterns across the entire codebase

## Important Notes

- Paths in @ syntax are relative to your current working directory when invoking gemini
- The CLI will include file contents directly in the context
- No need for --yolo flag for read-only analysis
- Gemini's context window can handle entire codebases that would overflow Claude's context
- When checking implementations, be specific about what you're looking for to get accurate results

## Development Commands

```bash
# Package Manager: Bun
bun install              # Install dependencies
bun run dev              # Start development server (with Turbopack)
bun run build            # Build for production
bun run start            # Start production server
bun run lint             # Run linting
bun run add:ui           # Add shadcn-ui components
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS v4, shadcn-ui components
- **State Management**: @tanstack/react-query
- **API**: Custom HttpCore class with fetch API
- **Package Manager**: Bun
- **Icons**: Lucide React

## Architecture

The codebase follows a FSD(Feature-Slice-Design) architecture pattern:

```
app/                # Next.js App Router pages
base/               # Foundation layer (utilities, components, contexts)
entities/           # Business entities with models, APIs, and UI
features/           # Feature-specific components and logic
modules/            # Page-level components and layouts (FSD's widget layer)
public/             # Static assets
```

### Layer Responsibilities

**Base Layer (`base/`)**

- Shared UI components (shadcn-ui)
- Core utilities (cn, cookie management)
- HTTP client (HttpCore)
- React Query configuration
- Global contexts and providers

**Entities Layer (`entities/`)**

- Domain models and types
- API functions and React Query hooks
- Reusable UI components specific to entities
- Structure: `[entity]/models/`, `[entity]/apis/`, `[entity]/ui/`

**Features Layer (`features/`)**

- Feature-specific components and logic
- Custom hooks for features
- Feature-specific UI components

**Modules Layer (`modules/`)**

- Page-level components
- Layout components
- Full page implementations

## Key Patterns

### API Layer

- Uses custom `HttpCore` class in `base/fetch/core.ts`
- Handles authentication, token management, and error handling
- All API calls should use React Query with `queryOptions` pattern

### React Query Usage

```typescript
// Define query options
export const userQueryOptions = {
  queryKey: ["user"],
  queryFn: getUser,
  staleTime: 5 * 60 * 1000, // 5 minutes
};

// Use in components
const { data: user } = useSuspenseQuery(userQueryOptions);
```

### Server-Side Prefetching

- Use `PrefetchBoundary` component for SSR data fetching
- Prefetch queries in page components using `prefetchOptions` prop

### Authentication

- JWT-based authentication with middleware
- Automatic token refresh in HttpCore
- Middleware redirects unauthenticated users to login

### Routing

- Centralized route constants in `base/constants/path.ts`
- Dynamic route helpers: `PATH.feedback(id)`
- Middleware handles authentication routing

## Development Constraints

### Code Style

- Use `cn` utility for conditional styling (required)
- Avoid margin/padding - use gap or spacing divs instead
- No inline styles or inline functions
- Handler functions: `handle{Target}{Event}` (e.g., `handleSubmitClick`)
- No `React.Module` imports - import directly
- Avoid `any` type - create proper interfaces

### Component Organization

- Files over 150 lines should be split into modules
- Use barrel exports (`index.ts`) for clean imports
- Prefer functional components with hooks
- Keep page components in `modules/[page]/ui/`

### Styling Rules

- Use flex and grid instead of absolute/relative positioning
- Prefer semantic HTML elements
- Use shadcn-ui components for consistency
- Follow the color tokens in `base/styles/custom.css`

### API Patterns

- All API functions in `entities/[entity]/apis/apis.ts`
- React Query hooks in `entities/[entity]/apis/queries.ts`
- Use `queryOptions` pattern for prefetching
- Type all API responses with proper interfaces

## File Structure Examples

### Page Implementation

```
app/dashboard/
    page.tsx                    # Route handler
    modules/dashboard/ui/
        dashboard-page-view.tsx # Main page component
        index.ts               # Barrel export
```

### Entity Structure

```
entities/user/
    models/types.ts            # Type definitions
    apis/
        apis.ts               # API functions
        queries.ts            # React Query hooks
    ui/
        user-profile.tsx      # Entity UI components
        index.ts              # Barrel export
```

## Important Notes

- Always use TypeScript with proper typing
- Follow the existing patterns for consistency
- Use the `cn` utility for all conditional styling
- Prefer React Query over direct fetch calls
- Keep components focused and single-purpose
- Use the established folder structure and naming conventions

## Authentication Flow

1. User logs in via OAuth (Google/Kakao)
2. Token stored in HTTP-only cookies
3. HttpCore automatically includes Bearer token
4. Middleware validates routes and redirects as needed
5. Token refresh handled automatically in HttpCore
