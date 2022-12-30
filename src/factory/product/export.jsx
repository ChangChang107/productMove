import React from 'react'

export default function ExportProduct() {
  return (
    <div class="mx-auto w-full max-w-[550px]">
        <form method="POST">
            <div class="mb-5">
                <label
                for="name"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Name Store
                </label>
                <input
                type="text"
                name="name"
                id="name"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                for="amount"
                class="mb-3 block text-base font-medium text-[#07074D]"
                >
                Amount
                </label>
                <input
                type="number"
                name="amount"
                id="amount"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#46bd5e] focus:shadow-md"
                />
            </div>
            <div>
                <button
                class="mr-5 mt-5 mb-5 hover:shadow-form rounded-md bg-green-500 py-3 px-8 text-base font-semibold text-white outline-none"
                >
                Export
                </button>
            </div>
        </form>
    </div>
  )
}
