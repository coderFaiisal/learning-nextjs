import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 4000);
  return (
    <div>
      <h1>404 error!!! Something went wrong...!</h1>
    </div>
  );
};

export default ErrorPage;
