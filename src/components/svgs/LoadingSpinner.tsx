export default function LoadingSpinner() {
  return (
    <div className="animate-spin w-max h-max">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_5_4)">
          <path d="M25 12.5C25 14.1415 24.6767 15.767 24.0485 17.2835C23.4203 18.8001 22.4996 20.1781 21.3388 21.3388C20.1781 22.4996 18.8001 23.4203 17.2835 24.0485C15.767 24.6767 14.1415 25 12.5 25L12.5 23.1811C13.9027 23.1811 15.2916 22.9048 16.5875 22.368C17.8834 21.8312 19.0608 21.0445 20.0527 20.0527C21.0445 19.0608 21.8312 17.8834 22.368 16.5875C22.9048 15.2916 23.1811 13.9027 23.1811 12.5H25Z" fill="#EF404F" />
        </g>
        <defs>
          <clipPath id="clip0_5_4">
            <rect width="25" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}