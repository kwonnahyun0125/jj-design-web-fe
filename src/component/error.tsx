import Link from "next/link";
import { ERROR_CODE, ERROR_DESCRIPTION, ERROR_MESSAGES } from "@/type/error";

export const Error = ({ status }: { status: string }) => {
  const errorStatus = status.toUpperCase() as keyof typeof ERROR_MESSAGES; // 에러 메세지, 코드 enum key

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
          {ERROR_MESSAGES[errorStatus]}
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
          {ERROR_CODE[errorStatus]}
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          {ERROR_DESCRIPTION[errorStatus]}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#E5E7EB] hover:bg-[#111827] hover:text-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            홈 화면으로 이동
          </Link>
          {/* <Link
            href="#"
            className="text-sm font-semibold text-gray-900 dark:text-white"
          >
            지원팀에 문의하기 <span aria-hidden="true">&rarr;</span>
          </Link> */}
        </div>
      </div>
    </main>
  );
};
