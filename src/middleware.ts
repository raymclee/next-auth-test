export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)", "/dashboard"],
// };

export const config = {
  matcher: ["/dashboard", "/((?!_next/static|favicon.ico|login|).*)"],
};
