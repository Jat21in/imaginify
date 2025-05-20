import { authMiddleware } from "@clerk/nextjs";

// Configure middleware with explicit public routes
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks/clerk',
    '/api/webhooks/stripe'
  ]
});

export const config = {
  matcher: [
    // Protect all routes except static files and _next
    '/((?!.*\\..*|_next).*)',
    '/',                     // Include root
    '/(api|trpc)(.*)'        // Include API and tRPC routes
  ]
};
