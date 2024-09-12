



/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WHwyyramiK6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AdminArticlesTable = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4 md:p-10">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Find Local Businesses</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
            Enter your zip code and the type of business you\'re looking for.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <div className="flex-1">
            <Label htmlFor="zipcode" className="sr-only">
              Zip Code
            </Label>
            <Input id="zipcode" type="text" placeholder="Enter zip code" className="w-full" />
          </div>
          <div className="flex-1">
            <Label htmlFor="business" className="sr-only">
              Business Type
            </Label>
            <Input id="business" type="text" placeholder="Enter business type" className="w-full" />
          </div>
          <Button className="w-full sm:w-auto">Search</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <ReceiptIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Accounting
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <CopyrightIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Legal
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <BriefcaseMedicalIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Medical
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <ConstructionIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Real Estate
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <StoreIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Retail
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <ComputerIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Technology
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <CreditCardIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Finance
              </h3>
            </div>
          </Link>
          <Link
            href="#"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            prefetch={false}
          >
            <div className="p-6 flex flex-col items-center justify-center gap-4">
              <FishIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
              <h3 className="text-lg font-medium group-hover:text-primary-500 dark:group-hover:text-primary-400">
                Food
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}

function BriefcaseMedicalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 11v4" />
      <path d="M14 13h-4" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M18 6v14" />
      <path d="M6 6v14" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function ComputerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function ConstructionIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  )
}


function CopyrightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  )
}


function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function FishIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  )
}


function ReceiptIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}


function StoreIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  )
}
export default AdminArticlesTable