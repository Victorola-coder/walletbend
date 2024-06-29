import { SEO } from "../components";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found, pay $404 to access this page" />
      <div className="h-dvh flex flex-col justify-center items-center text-black text-center font-semibold text-xl">
        You are not supposed to see this page due to legal reasons.
        <p className="mt-1">
          Go to&nbsp;
          <span>
            <Link className="text-gray-600 underline" to="/">
              Home
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}
