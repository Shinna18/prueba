import { useState } from 'react'

interface Props {
  label: string
}

export default function MenuDrop({ label }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex gap-x-2 px-2 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute w-[400px] rounded border-[1px] border-gray-300 bg-white shadow-md">
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
          <div className="cursor-pointer p-4 hover:bg-gray-300">
            Acc settings
          </div>
        </div>
      )}
    </div>
  )
}